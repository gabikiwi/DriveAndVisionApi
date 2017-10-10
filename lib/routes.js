'use strict';
var assign = require('lodash').assign;
var express = require('express');
var router = express.Router();
var values = require('lodash').values;


// Gabriel
//var async = require('async');
router.post('/test', function (req, resp) {
     require('./quickstart');
    resp.end(JSON.stringify(req.body));
});


module.exports = router;