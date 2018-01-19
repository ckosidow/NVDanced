// set up ========================
var express = require('express');
var app = express();                               // create our app w/ express
var morgan = require('morgan');             // log requests to the console (express4)
var bodyParser = require('body-parser');    // pull information from HTML POST (express4)
var cookieParser = require('cookie-parser');
var request = require("request");
var clientId = 'f3336aca34094fbabfed8ae3e5d7879c';
var clientSecret = 'a42a086eb56e49e288124c16411d22a6';

// configuration =================
app.use(express.static(__dirname + '/public'));                 // set the static files location /public/img will be /img for users
app.use(morgan('dev'));                                         // log every request to the console
app.use(bodyParser.urlencoded({'extended': 'true'}));            // parse application/x-www-form-urlencoded
app.use(bodyParser.json());                                     // parse application/json
app.use(bodyParser.json({type: 'application/vnd.api+json'})); // parse application/vnd.api+json as json
app.use(cookieParser());

app.get('/login', function (req, res) {
    res.redirect('https://accounts.spotify.com/authorize' +
        '?response_type=code' +
        '&client_id=' + clientId +
        '&redirect_uri=' + encodeURIComponent('http://localhost:8080/token'));
});

app.get("/token", function (req, res) {
    request.post('https://accounts.spotify.com/api/token', {
        form: {
            code: req.param("code"),
            grant_type: "authorization_code",
            redirect_uri: 'http://localhost:8080/token'
        },
        headers: {
            'Content-Type': 'application/x-www-form-urlencoded',
            Authorization: 'Basic ' + new Buffer(clientId + ':' + clientSecret).toString('base64')
        }
    }, function (err, resp, body) {
        var auth = JSON.parse(body);

        res.cookie("auth", auth.access_token);

        res.sendfile("./app/index.html");
    }).on("error", function (err) {
        console.log("Error: " + err.message);

        res.sendfile("./app/index.html");
    });
});

app.get("/song1", function (req, res) {
    var auth = req.cookies['auth'];

    var options = {
        headers: {
            'Content-Type': 'application/json',
            'Authorization': 'Bearer ' + auth
        }
    };

    request.get('https://api.spotify.com/v1/tracks/11dFghVXANMlKmJXsNCbNl?market=ES', options, function (err, resp, body) {
        console.log(JSON.parse(body));
    }).on("error", function (err) {
        console.log("Error: " + err.message);
    });
});

app.get("*", function (req, res) {
    res.sendfile("./app/index.html");
});

// listen (start app with node server.js) ======================================
app.listen(8080);
console.log("App listening on port 8080");