// App Imports
const routers = require('../../api/router.js')
const express = require('express')

// Start endpoint
module.exports = function(server) {
    console.info('SETUP - Start Endpoint..')
    router = express.Router()
    routers(server)
    console.info('SETUP - Endpoint are working!')
}