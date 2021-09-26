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

router.post("/start-player", function (req, res) {
    const auth = req.cookies['auth'];
    const device_id = req.query.device_id;

    const options = {
        body: JSON.stringify({
            device_ids: [device_id],
            play: true
        }),
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json',
            'Authorization': 'Bearer ' + auth
        }
    };

    request.put('https://api.spotify.com/v1/me/player', options, function (err, resp, body) {
        // console.log(resp);
    }).on("error", function (err) {
        console.error("Error: " + err.message);
    });

    res.json({});
});

router.post("/play-song", function (req, res) {
    const auth = req.cookies['auth'];
    const device_id = req.query.device_id;
    const uri = req.query.uri;

    const options = {
        body: JSON.stringify({
            device_id: [device_id],
            uris: [uri]
        }),
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json',
            'Authorization': 'Bearer ' + auth
        }
    };

    request.put('https://api.spotify.com/v1/me/player/play', options, function (err, resp, body) {
        // console.log("sent: " + uri);
    }).on("error", function (err) {
        console.error("Error: " + err.message);
    });

    res.json({});
});

module.exports = router;