//
// This file handles the routing for "arrest" API requests.
//

var express = require('express');
var router = express.Router();
var arrest = require('../models/arrest');
var bodyParser = require('body-parser');

var app = express();

router.get('/', function(req, res, next) {
      arrest.getAllArrests(function(err, rows) {
          if (err) {
              res.json(err);
          } else {
              res.json(rows);
          }
      });
});

router.post('/', function(req, res) {
    arrest.addArrest(req.body, function(err, count) {
        if (err) {
            res.json(err);
        } else {
            res.json(req.body);
        }
    });
});

module.exports = router;
