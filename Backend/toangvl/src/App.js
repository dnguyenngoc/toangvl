// Imports
const express = require('express')

// App Imports
const database = require('./setup/server/database.js')
// const middlewares = require('./setup/server/middlewares.js')
// const upload = require('./setup/server/upload.js')
const endpoint = require('./setup/server/endpoint.js')
const start = require('./setup/server/start.js')
// const socket = require('./setup/server/socket.js')


// Create express server
const server = express();

// Connect database
database()

// Setup middlewares
// middlewares(server)

// Setup uploads
// upload(server)

// Setup endpoint
endpoint(server)

// Setup Socket Io
// socket(server)

// Start server
start(server)
