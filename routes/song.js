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

    request.get('https://api.spotify.com/v1/tracks/' + req.query.song_id + '?market=ES', options, function (err, resp, body) {
        var song = JSON.parse(body);

        res.render("song", {
            song: song
        });
    }).on("error", function (err) {
        console.log("Error: " + err.message);

        res.render("song");
    });
});

module.exports = router;