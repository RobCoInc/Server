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


// TODO: Make the following 3 routes

router.get('/getDescriptionsByName/:id?', function(req, res, next) {
  if (req.params.email) {
      description.getDescriptionsByName(req.params.id, function(err, rows) {
          if (err) {
              res.json(err);
          } else {
              res.json(rows);
          }
      });
    }
});

router.get('/getDescriptionsByNameWhereUserIdMatches/:id?', function(req, res, next) {
  if (req.params.email) {
      description.getDescriptionsByNameWhereUserIdMatches(req.params.id, function(err, rows) {
          if (err) {
              res.json(err);
          } else {
              res.json(rows);
          }
      });
    }
});

router.get('/getDescriptionsByNameWhereCompanyIdMatches/:id?', function(req, res, next) {
  if (req.params.email) {
      description.getDescriptionsByNameWhereCompanyIdMatches(req.params.id, function(err, rows) {
          if (err) {
              res.json(err);
          } else {
              res.json(rows);
          }
      });
    }
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
