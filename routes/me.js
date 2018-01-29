var express = require('express');
var router = express.Router();
var request = require("request");

router.get("/", function (req, res) {
    var auth = req.cookies['auth'];

    var options = {
        headers: {
            'Content-Type': 'application/json',
            'Authorization': 'Bearer ' + auth
        }
    };

    request.get('https://api.spotify.com/v1/me', options, function (err, resp, body) {
        var user = JSON.parse(body);

        request.get('https://api.spotify.com/v1/me/playlists', options, function (err, resp, body) {
            var playlists = JSON.parse(body);

            res.render("user", {
                user: user,
                playlists: playlists.items
            });
        }).on('error', function (err) {
            console.error("Error: " + err.message);

            res.render("user");
        });
    }).on("error", function (err) {
        console.error("Error: " + err.message);

        res.render("me");
    });
});

module.exports = router;