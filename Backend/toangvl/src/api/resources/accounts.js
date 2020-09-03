var express = require('express');
var router = express.Router();

var account_controller = require('../controllers/accounts');

router.post('/login_access_token', account_controller.login_access_token);