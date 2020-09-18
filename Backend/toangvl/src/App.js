// Imports
const express = require('express')

// App Imports
const database = require('./setup/server/database.js')
const endpoint = require('./setup/server/endpoint.js')
const start = require('./setup/server/start.js')
// const socket = require('./setup/server/socket.js')


// Create express server
const server = express();

// Connect database
database()

// Setup endpoint
endpoint(server)

// Setup Socket Io
// socket(server)

// Start server
start(server)
