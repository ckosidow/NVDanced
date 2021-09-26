const express = require('express');
const router = express.Router();
const request = require("request");
const clientId = process.env.clientId;
const clientSecret = process.env.clientSecret;
const redirect = process.env.redirect;

router.get('/', function (req, res, next) {
    res.redirect('https://accounts.spotify.com/authorize' +
        '?response_type=code' +
        '&client_id=' + clientId +
        '&scope=' + encodeURIComponent(
            'streaming ' +
            'user-read-email ' +
            'user-read-private ' +
            'user-modify-playback-state ' +
            'user-read-currently-playing ' +
            'user-read-playback-state ' +
            'user-modify-playback-state')  +
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
        const auth = JSON.parse(body);

        res.cookie("auth", auth.access_token);
        res.cookie("refresh", auth.refresh_token);

        res.redirect("../#/user");
    }).on("error", function (err) {
        console.log("Error: " + err.message);
    });
});

module.exports = router;