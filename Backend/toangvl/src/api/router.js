var express = require('express');
var router = express.Router();

var accounts_controller = require('../controllers/accounts');

/// Account ///

// POST request for Login access token.
router.post('/accounts/login', accounts_controller.login_access_token);

// POST request for Logout account.
router.post('/accounts/logout', accounts_controller.logout);
