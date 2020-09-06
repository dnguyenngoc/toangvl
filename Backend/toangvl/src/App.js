// Imports
import express from 'express'

// App Imports
// import database from './setup/server/database'
// import middlewares from './setup/server/middlewares'
// import upload from './setup/server/upload'
// import endpoint from './setup/server/endpoint'
import start from './setup/server/start'
// import socket from './setup/server/socket'

// Create express server
const server = express()

// Connect database
// database()

// Setup middlewares
// middlewares(server)

// Setup uploads
// upload(server)

// Setup endpoint
// endpoint(server)

// Setup Socket Io
// socket(server)

// Start server
start(server)
