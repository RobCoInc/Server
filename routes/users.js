var express = require('express');
var router = express.Router();
var user = require('../models/user');
var bodyParser = require('body-parser');

var app = express();

router.get('/:id?', function(req, res, next) {
    if (req.params.id) {
        console.log('REQUEST: get a single user by id');
        user.getUserById(req.params.id, function(err, rows) {
            if (err) {
                res.json(err);
            } else {
                res.json(rows);
            }
        });
    } else {
        console.log('REQUEST: get all users');
        user.getAllUsers(function(err, rows) {
            if (err) {
                res.json(err);
            } else {
                res.json(rows);
            }
        });
    }
});

router.post('/', function(req, res) {
    console.log('REQUEST: add user to database');
    console.log('New user ID: ' + req.body.id);
    console.log('First: ' + req.body.first);
    console.log('Last: ' + req.body.last);
    user.addUser(req.body, function(err, count) {
        if (err) {
            res.json(err);
        } else {
            res.json(req.body);
        }
    });
});

module.exports = router;
