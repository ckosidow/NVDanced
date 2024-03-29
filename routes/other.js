var express = require('express');
var router = express.Router();
var request = require("request");

router.get("/", function (req, res) {
    var auth = req.cookies['auth'];
    var userId = req.query.user_id;

    var options = {
        headers: {
            'Content-Type': 'application/json',
            'Authorization': 'Bearer ' + auth
        }
    };

    request.get('https://api.spotify.com/v1/users/' + userId, options, function (err, resp, body) {
        var user = JSON.parse(body);

        request.get('https://api.spotify.com/v1/users/' + userId + '/playlists?limit=50', options, function (err, resp, body) {
            var playlists = JSON.parse(body);

            res.json({
                user: user,
                playlists: playlists
            });
        }).on('error', function (err) {
            console.log("Error: " + err.message);
            res.json(null);
        });
    }).on("error", function (err) {
        console.log("Error: " + err.message);
        res.json(null);
    });
});

module.exports = router;