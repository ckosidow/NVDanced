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

    request.get('https://api.spotify.com/v1/search', options, function (err, resp, body) {
        res.json(JSON.parse(body));
    }).on("error", function (err) {
        console.error("Error: " + err.message);
    });
});

module.exports = router;