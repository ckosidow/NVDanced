// set up ========================
var express = require('express');
var app = express();                               // create our app w/ express
var morgan = require('morgan');             // log requests to the console (express4)
var bodyParser = require('body-parser');    // pull information from HTML POST (express4)
var cookieParser = require('cookie-parser');
var https = require("https");
var request = require("request");

// configuration =================
app.use(express.static(__dirname + '/public'));                 // set the static files location /public/img will be /img for users
app.use(morgan('dev'));                                         // log every request to the console
app.use(bodyParser.urlencoded({'extended': 'true'}));            // parse application/x-www-form-urlencoded
app.use(bodyParser.json());                                     // parse application/json
app.use(bodyParser.json({type: 'application/vnd.api+json'})); // parse application/vnd.api+json as json
app.use(cookieParser());

app.get('/login', function (req, res) {
    console.log("logging into spotify");
    var scopes = 'user-read-private user-read-email';
    res.redirect('https://accounts.spotify.com/authorize' +
        '?response_type=code' +
        '&client_id=f3336aca34094fbabfed8ae3e5d7879c' +
        (scopes ? '&scope=' + encodeURIComponent(scopes) : '') +
        '&redirect_uri=' + encodeURIComponent('http://localhost:8080/auth'));
});

app.get("/auth", function (req, res) {
    res.cookie("auth", req.param("code"));

    res.sendfile("./app/index.html");
});

app.get("/song1", function (req, res) {
    var auth = req.cookies['auth'];

    var options = {
        url: 'https://api.spotify.com/v1/audio/3n3Ppam7vgaVa1iaRUc9Lp?market=ES',
        headers: {
            Authorization: 'Bearer ' + auth,
            Accepts: 'application/json'
        }
    };

    request.get(options, function (err, res, body) {
        var data = '';

        // A chunk of data has been recieved.
        res.on('data', function (chunk) {
            data += chunk;
        });

        // The whole response has been received. Print out the result.
        res.on('end', function () {
            console.log(JSON.parse(data));
        });
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