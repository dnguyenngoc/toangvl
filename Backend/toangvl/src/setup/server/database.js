// Imports
const mysql = require('mysql')

// App Imports
const env = require('../config/env.js')

// Connect database
module.exports = async function () {
  console.info('SETUP - Connecting database..')

  await connectWithRetry()
}

// Retry connection
const connectWithRetry = async () => {
  return await mysql.createPool(
    {
      host: env.DATABASE_URL,
      user: env.DATABASE_USER,
      password: env.DATABASE_PASSWORD,
      database: env.DATABASE_NAME
    }
  )
}
