var express = require('express');
var router = express.Router();
var request = require("request");

router.get('/', function (req, res) {
    var auth = req.cookies['auth'];
    var userId = req.query.user_id;
    var playlistId = req.query.playlist_id;
    var options = {
        headers: {
            'Content-Type': 'application/json',
            'Authorization': 'Bearer ' + auth
        }
    };

    request.get('https://api.spotify.com/v1/users/' + userId + '/playlists/' + playlistId, options, function (err, resp, body) {
        var playlist = JSON.parse(body);

        if (!playlist || !playlist.tracks) {
            console.log("Error: no playlist found");

            return null;
        }

        var tracks = playlist.tracks.items;
        var ids = [];
        var overallPop = 0;

        for (var i = 0; i < tracks.length; i++) {
            ids.push(tracks[i].track.id);

            overallPop += tracks[i].track.popularity;
        }

        request.get('https://api.spotify.com/v1/audio-features?ids=' + ids, options, function (err, resp, body) {
            var features = JSON.parse(body).audio_features;
            var overallDance = 0;

            for (var i = 0; i < features.length; i++) {
                if (features[i]) {
                    for (var j = 0; j < tracks.length; j++) {
                        if (features[i].id === tracks[j].track.id) {
                            tracks[j].track.danceability = (features[i].danceability * 100).toFixed(2);
                            tracks[j].track.tempo = features[i].tempo;
                            break;
                        }
                    }

                    overallDance += features[i].danceability;
                }
            }

            res.json({
                playlist: playlist,
                overallDance: ((overallDance / features.length) * 100).toFixed(2),
                overallPop: (overallPop / tracks.length).toFixed(2)
            });
        });
    }).on('error', function (err) {
        console.log("Error: " + err.message);
    });
});

module.exports = router;