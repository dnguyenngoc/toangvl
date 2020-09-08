
// Imports
const ip = require('ip')
const moment = require('moment')

// App Imports
const  env = require('../config/env.js')

// Start server
module.exports = function(server) {
    console.info('SETUP - Starting server..')
  
    // Start Server
    const serverProcess = server.listen(env.BACKEND_PORT, (error) => {
      if (error) {
        console.error('ERROR - Unable to start server.')
      } else {
        console.info(`INFO - Server started on`)
        console.info(`  Local   http://localhost:${ env.BACKEND_PORT } [${ env.NODE_ENV }]`)
        console.info(`  Network http://${ ip.address() }:${ env.BACKEND_PORT } [${ env.NODE_ENV }]`)
        console.info(`  Datetime ${ moment().format('YYYY-MM-DD hh:mm:ss a') }\n`)
      }
    })
  }