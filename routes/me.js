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

    request.get('https://api.spotify.com/v1/me', options, function (err, resp, body) {
        const user = JSON.parse(body);

        request.get('https://api.spotify.com/v1/me/playlists', options, function (err, resp, body) {
            const playlists = JSON.parse(body);

            res.end({
                user: user,
                playlists: playlists.items
            });
        }).on('error', function (err) {
            console.error("Error: " + err.message);
        });
    }).on("error", function (err) {
        console.error("Error: " + err.message);
    });
});

module.exports = router;