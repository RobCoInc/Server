var express = require('express');
var router = express.Router();
var user = require('../models/user');
var bodyParser = require('body-parser');

var app = express();

router.get('/getUserPasswordByEmail/:email?', function(req, res, next) {
    if (req.params.email) {
        user.getUserPasswordByEmail(req.params.email, function(err, rows) {
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

router.get('/getUserById/:id?', function(req, res, next) {
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

router.get('/getUserByEmail/:email?', function(req, res, next) {
    if (req.params.email) {
        user.getUserById(req.params.email, function(err, rows) {
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

router.post('/', function(req, res) {
    console.log('REQUEST: add user to database');
    user.addUser(req.body, function(err, count) {
        if (err) {
            res.json(err);
        } else {
            res.json(req.body);
        }
    });
});

module.exports = router;
