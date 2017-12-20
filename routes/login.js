var express = require('express');
var router = express.Router();
var user = require('../models/user');

router.post('/', function(req, res) {
    user.checkPassword(req.body, function(err, count) {
        if (err) {
            res.json(err);
        } else {
            res.json(req.body);
        }
    });
});

module.exports = router;
