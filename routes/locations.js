//
// This file handles the routing for "location" API requests.
//

var express = require('express');
var router = express.Router();
var location = require('../models/location');
var bodyParser = require('body-parser');

var app = express();

router.get('/', function(req, res, next) {
      location.getAllLocations(function(err, rows) {
          if (err) {
              res.json(err);
          } else {
              res.json(rows);
          }
      });
});

router.get('/getLocationsByCompanyId/:companyId?', function(req, res, next) {
      location.getLocationsByCompanyId(req.params.id, function(err, rows) {
          if (err) {
              res.json(err);
          } else {
              res.json(rows);
          }
      });
});

router.post('/', function(req, res) {
    location.addLocation(req.body, function(err, count) {
        if (err) {
            res.json(err);
        } else {
            res.json(req.body);
        }
    });
});

module.exports = router;
