'use strict';
var assign = require('lodash').assign;
var express = require('express');
var router = express.Router();
var values = require('lodash').values;


// Gabriel
//var async = require('async');
router.post('/demo', function (req, resp) {
     require('./quickstart.js');
    resp.end(JSON.stringify(req.body));
});

router.get('/vision', function (req, resp) {
    require('./vision.js');
   resp.end(JSON.stringify(req.body));
});

module.exports = router;