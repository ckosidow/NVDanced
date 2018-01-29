var express = require('express');
var router = express.Router();
var request = require("request");
var clientId = process.env.clientId;
var clientSecret = process.env.clientSecret;
var redirect = process.env.redirect;

router.get('/', function (req, res, next) {
    res.redirect('https://accounts.spotify.com/authorize' +
        '?response_type=code' +
        '&client_id=' + clientId +
        '&redirect_uri=' + encodeURIComponent(redirect));
});

router.get("/token", function (req, res, next) {
    request.post('https://accounts.spotify.com/api/token', {
        form: {
            code: req.param("code"),
            grant_type: "authorization_code",
            redirect_uri: redirect
        },
        headers: {
            'Content-Type': 'application/x-www-form-urlencoded',
            Authorization: 'Basic ' + new Buffer(clientId + ':' + clientSecret).toString('base64')
        }
    }, function (err, resp, body) {
        var auth = JSON.parse(body);

        res.cookie("auth", auth.access_token);
        res.cookie("refresh", auth.refresh_token);

        res.redirect("../me");
    }).on("error", function (err) {
        console.log("Error: " + err.message);

        res.render("index");
    });
});

module.exports = router;