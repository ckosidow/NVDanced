// set up ========================
var express = require('express');
var app = express();                               // create our app w/ express
var path = require("path");
var logger = require('morgan');             // log requests to the console (express4)
var bodyParser = require('body-parser');    // pull information from HTML POST (express4)
var cookieParser = require('cookie-parser');
var request = require("request");

var index = require("./routes/index");
var login = require("./routes/login");
var me = require("./routes/me");
var playlist = require("./routes/playlist");
var other = require("./routes/other");
var song = require("./routes/song");
var album = require("./routes/album");

// configuration =================
app.use(express.static(__dirname + '/public'));                 // set the static files location /public/img will be /img for users
app.use(logger('dev'));                                         // log every request to the console
app.use(bodyParser.urlencoded({extended: false}));            // parse application/x-www-form-urlencoded
app.use(bodyParser.json());                                     // parse application/json
app.use(cookieParser());

// view engine setup
app.set("views", path.join(__dirname, "views"));
app.set("view engine", "jade");

app.use("/", index);
app.use("/login", login);
app.use("/me", me);
app.use("/other", other);
app.use("/playlist", playlist);
app.use("/song", song);
app.use("/album", album);

function refresh(req, fn) {
    request.post('https://accounts.spotify.com/api/token', {
        form: {
            code: req.param("refresh"),
            grant_type: "authorization_code",
            redirect_uri: process.env.redirect
        },
        headers: {
            'Content-Type': 'application/x-www-form-urlencoded',
            Authorization: 'Basic ' + new Buffer(clientId + ':' + clientSecret).toString('base64')
        }
    }, function (err, resp, body) {
        var auth = JSON.parse(body);

        resp.cookie("auth", auth.access_token);
        resp.cookie("refresh", auth.refresh_token);

        fn();
    }).on("error", function (err) {
        console.log("Error: " + err.message);

        fn();
    });
}

// listen (start app with node server.js) ======================================
app.listen(8080, '0.0.0.0');
console.log("App listening on port 8080");