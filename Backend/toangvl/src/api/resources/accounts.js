// Imports
const express = require('express')

// App Imports
const controller = require('../controllers/accounts.js')

router = express.Router();

// Login access token
router.get('/login',controller.login)

// // Login renew token
// router.get('/renew-token',controller.renewToken)

// // Logout
// router.post('/logout',controller.logout)

// // Edit accounts
// router.put('/change',controller.editAccount)

// // Delete accounts
// router.post('/remove',controller.remove)


module.exports = router;