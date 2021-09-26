const express = require('express');
const router = express.Router();
const request = require("request");

router.get('/', function (req, res) {
    const auth = req.cookies['auth'];
    const albumId = req.query.album_id;

    const options = {
        headers: {
            'Content-Type': 'application/json',
            'Authorization': 'Bearer ' + auth
        }
    };

    request.get('https://api.spotify.com/v1/albums/' + albumId, options, function (err, resp, body) {
        const album = JSON.parse(body);
        const tracks = JSON.parse(body).tracks.items;
        const ids = [];
        const overallPop = JSON.parse(body).popularity;

        for (let i = 0; i < tracks.length; i++) {
            ids.push(tracks[i].id);
        }

        request.get('https://api.spotify.com/v1/audio-features?ids=' + ids, options, function (err, resp, body) {
            const features = JSON.parse(body).audio_features;
            let overallDance = 0;
            let overallTempo = 0;

            for (let i = 0; i < features.length; i++) {
                if (features[i]) {
                    for (let j = 0; j < tracks.length; j++) {
                        if (features[i].id === tracks[j].id) {
                            tracks[j].danceability = features[i].danceability * 100;
                            tracks[j].tempo = features[i].tempo;

                            break;
                        }
                    }

                    overallDance += features[i].danceability;
                    overallTempo += features[i].tempo;
                }
            }

            res.json({
                album: album,
                tracks: tracks,
                overallDance: ((overallDance / features.length) * 100).toFixed(2),
                overallTempo: (overallTempo / features.length).toFixed(2),
                overallPop: overallPop
            });
        });
    }).on('error', function (err) {
        console.log("Error: " + err.message);
        res.json(null);
    });
});

module.exports = router;