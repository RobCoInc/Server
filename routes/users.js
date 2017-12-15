var express = require('express');
var router = express.Router();
var user = require('../models/user');

var mysql = require("mysql");

router.get('/:id?', function(req, res, next) {
    if (req.params.id) {
        user.getUserById(req.params.id, function(err, rows) {
            if (err) {
                res.json(err);
            } else {
                res.json(rows);
            }
        });
    } else {
        user.getAllUsers(function(err, rows) {
            if (err) {
                res.json(err);
            } else {
                res.json(rows);
            }
        });
    }
});

module.exports = router;
