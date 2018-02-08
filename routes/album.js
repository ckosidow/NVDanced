//wowowo
var express = require('express');
var router = express.Router();
var request = require("request");

router.get('/', function (req, res) {
    var test = null;
    var auth = req.cookies['auth'];
    var albumId = req.query.album_id;
    var album;
    var options = {
        headers: {
            'Content-Type': 'application/json',
            'Authorization': 'Bearer ' + auth
        }
    };

    request.get('https://api.spotify.com/v1/albums/' + albumId, options, function (err, resp, body) {
        album = JSON.parse(body);
    });

    request.get('https://api.spotify.com/v1/albums/' + albumId + "/tracks", options, function (err, resp, body) {
        var tracks = JSON.parse(body).items;

        var ids = [];

        for (var i = 0; i < tracks.length; i++) {
            ids.push(tracks[i].id);
        }

        request.get('https://api.spotify.com/v1/audio-features?ids=' + ids, options, function (err, resp, body) {
            var features = JSON.parse(body).audio_features;
            var overallDance = 0;

            for (var i = 0; i < features.length; i++) {
                if (features[i]) {
                    for (var j = 0; j < tracks.length; j++) {
                        if (features[i].id === tracks[j].id) {
                            tracks[j].danceability = (features[i].danceability * 100).toFixed(2);
                            tracks[j].tempo = features[i].tempo;
                            break;
                        }
                    }

                    overallDance += features[i].danceability;
                }
            }

            res.render("album", {
                album: album,
                tracks: tracks,
                overallDance: ((overallDance / features.length) * 100).toFixed(2)
            });
        });
    }).on('error', function (err) {
        console.log("Error: " + err.message);

        res.render('album');
    });
});

module.exports = router;