//
// This file handles the routing for "shift" API requests.
//

var express = require('express');
var router = express.Router();
var shift = require('../models/shift');
var bodyParser = require('body-parser');

var app = express();

router.get('/', function(req, res, next) {
      shift.getAllShifts(function(err, rows) {
          if (err) {
              res.json(err);
          } else {
              res.json(rows);
          }
      });
});

router.post('/', function(req, res) {
    shift.addShift(req.body, function(err, count) {
        if (err) {
            res.json(err);
        } else {
            res.json(req.body);
        }
    });
});

module.exports = router;
