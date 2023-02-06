'use strict'
var express = require('express');
var controller = require('./index.controller');
var auth = require('../../auth.service');
var router = express.Router();
router.get('/',controller.getConfig);
router.get('/seo',controller.getSeoConfig);
module.exports = router;