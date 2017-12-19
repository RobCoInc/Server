//
// This file handles the routing for "company" API requests.
//

var express = require('express');
var router = express.Router();
var company = require('../models/company');
var bodyParser = require('body-parser');

var app = express();

router.get('/:id?', function(req, res, next) {
    if (req.params.id) {
        company.getCompanyById(req.params.id, function(err, rows) {
            if (err) {
                res.json(err);
            } else {
                res.json(rows);
            }
        });
    } else {
        company.getAllCompanys(function(err, rows) {
            if (err) {
                res.json(err);
            } else {
                res.json(rows);
            }
        });
    }
});

router.post('/', function(req, res) {
    company.addCompany(req.body, function(err, count) {
        if (err) {
            res.json(err);
        } else {
            res.json(req.body);
        }
    });
});

module.exports = router;
