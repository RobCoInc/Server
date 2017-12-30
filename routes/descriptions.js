//
// This file handles the routing for "description" API requests.
//

var express = require('express');
var router = express.Router();
var description = require('../models/description');
var bodyParser = require('body-parser');

var app = express();

router.get('/', function(req, res, next) {
      description.getAllDescriptions(function(err, rows) {
          if (err) {
              res.json(err);
          } else {
              res.json(rows);
          }
      });
});

router.post('/', function(req, res) {
    description.addDescription(req.body, function(err, count) {
        if (err) {
            res.json(err);
        } else {
            res.json(req.body);
        }
    });
});

module.exports = router;
