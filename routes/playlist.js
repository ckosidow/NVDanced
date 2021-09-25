const express = require('express');
const router = express.Router();
const request = require("request");

router.get('/', function (req, res) {
    const auth = req.cookies['auth'];
    const userId = req.query.user_id;
    const playlistId = req.query.playlist_id;
    const options = {
        headers: {
            'Content-Type': 'application/json',
            'Authorization': 'Bearer ' + auth
        }
    };

    request.get('https://api.spotify.com/v1/users/' + userId + '/playlists/' + playlistId, options, function (err, resp, body) {
        let playlist = JSON.parse(body);

        if (!playlist || !playlist.tracks) {
            console.log("Error: no playlist found");

            return null;
        }

        playlist.tracks.items = playlist.tracks.items.filter((track) => {return track.track != null});

        const tracks = playlist.tracks.items;
        const ids = [];
        let overallPop = 0;

        for (let i = 0; i < tracks.length; i++) {
            ids.push(tracks[i].track.id);

            if (tracks[i].track.popularity) {
                overallPop += tracks[i].track.popularity;
            }
        }

        request.get('https://api.spotify.com/v1/audio-features?ids=' + ids, options, function (err, resp, body) {
            const features = JSON.parse(body).audio_features;
            let overallDance = 0;
            let overallTempo = 0;

            for (let i = 0; i < features.length; i++) {
                if (features[i]) {
                    for (let j = 0; j < tracks.length; j++) {
                        if (features[i].id === tracks[j].track.id) {
                            tracks[j].track.danceability = features[i].danceability * 100;
                            tracks[j].track.tempo = features[i].tempo;
                            break;
                        }
                    }

                    overallTempo += features[i].tempo;
                    overallDance += features[i].danceability;
                }
            }

            res.json({
                playlist: playlist,
                overallDance: ((overallDance / features.length) * 100).toFixed(2),
                overallTempo: (overallTempo / features.length).toFixed(2),
                overallPop: (overallPop / tracks.length).toFixed(2)
            });
        });
    }).on('error', function (err) {
        console.log("Error: " + err.message);
    });
});

module.exports = router;