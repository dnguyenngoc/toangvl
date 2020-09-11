// App Imports
const routers = require('../../api/router.js')
const express = require('express')

// Start endpoint
module.exports = function(server) {
    console.info('SETUP - Start Endpoint..')
    router = express.Router()
    routers(server, (error) => {
        if (error) {
            console.error('ERROR - Unable to start Endpoint.')
        }else{
            console.info('SETUP - Endpoint are working!')
        }
    })
}