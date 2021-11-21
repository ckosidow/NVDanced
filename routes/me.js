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
                res.status(500);
            });
        }).on('error', function (err) {
            console.error("Error: " + err.message);
            res.status(500);
        });
    }).on("error", function (err) {
        console.error("Error: " + err.message);
        res.status(500);
    });
});

router.post("/start-player", function (req, res) {
    const auth = req.cookies['auth'];
    const device_id = req.query.device_id;
    const play = req.query.play;

    const options = {
        body: {
            device_ids: [device_id]
        },
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json',
            'Authorization': 'Bearer ' + auth
        }
    };

    if (play) {
        options.body.play = play;
    }

    options.body = JSON.stringify(options.body);

    request.put('https://api.spotify.com/v1/me/player', options, function (err, resp, body) {
        // console.log(resp);
        res.status(200);
        res.json(null);
    }).on("error", function (err) {
        console.error("Error: " + err.message);
        res.status(500);
        res.json(null);
    });
});

router.post("/play-song", function (req, res) {
    const auth = req.cookies['auth'];
    const device_id = req.query.device_id;
    const uri = req.query.uri;

    const options = {
        body: {},
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json',
            'Authorization': 'Bearer ' + auth
        }
    };

    if (uri) {
        options.body.uris = [uri];
    }

    if (device_id) {
        options.body.device_id = [device_id];
    }

    options.body = JSON.stringify(options.body);

    request.put('https://api.spotify.com/v1/me/player/play', options, function (err, resp, body) {
        // console.log("sent: " + uri);
        res.status(200);
        res.json(null);
    }).on("error", function (err) {
        console.error("Error: " + err.message);
        res.status(500);
        res.json(null);
    });
});

router.post("/pause", function (req, res) {
    const auth = req.cookies['auth'];
    const device_id = req.query.device_id;
    const uri = req.query.uri;

    const options = {
        body: {},
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json',
            'Authorization': 'Bearer ' + auth
        }
    };

    if (uri) {
        options.body.uris = [uri];
    }

    if (device_id) {
        options.body.device_id = [device_id];
    }

    options.body = JSON.stringify(options.body);

    request.put('https://api.spotify.com/v1/me/player/pause', options, function (err, resp, body) {
        // console.log("sent: " + uri);
        res.status(200);
        res.json(null);
    }).on("error", function (err) {
        console.error("Error: " + err.message);
        res.status(500);
        res.json(null);
    });
});

router.get("/get-playback", function (req, res) {
    const auth = req.cookies['auth'];

    const options = {
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json',
            'Authorization': 'Bearer ' + auth
        }
    };

    request.get('https://api.spotify.com/v1/me/player', options, function (err, resp, body) {
        // console.log("sent: " + uri);
        if (body) {
            res.json(JSON.parse(body));
        } else {
            res.json(null);
        }
    }).on("error", function (err) {
        console.error("Error: " + err.message);
        res.status(500);
        res.json(null);
    });
});

module.exports = router;