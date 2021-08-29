var express = require('express');
var router = express.Router();
var request = require("request");

router.get("/", function (req, res) {
    const auth = req.cookies['auth'];

    const options = {
        headers: {
            'Content-Type': 'application/json',
            'Authorization': 'Bearer ' + auth
        }
    };

    const response = {};

    request.get('https://api.spotify.com/v1/me', options, function (err, resp, body) {
        response['user'] = JSON.parse(body);

        request.get('https://api.spotify.com/v1/me/playlists?limit=50', options, function (err, resp, body) {
            response['playlists'] = JSON.parse(body);

            request.get('https://api.spotify.com/v1/me/following?type=artist', options, function (err, resp, body) {
                response['following'] = JSON.parse(body);

                res.json(response);
            }).on('error', function (err) {
                console.error("Error: " + err.message);
            });
        }).on('error', function (err) {
            console.error("Error: " + err.message);
        });
    }).on("error", function (err) {
        console.error("Error: " + err.message);
    });
});

module.exports = router;