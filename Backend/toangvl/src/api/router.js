var express = require('express');
var router = express.Router();

var accounts_controller = require('resources/accounts');

// Accounts api router
router.use('/accounts', accounts_controller);