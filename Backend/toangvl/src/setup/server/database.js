// Imports
const mongoose = require('mongoose')

// App Imports
const env = require('../config/env.js')

// Connect database waiting to connected!
module.exports = async function () {
  console.info('SETUP - Connecting database..')

  await connectWithRetry()
  console.info('SETUP - Connecting database completed!')
}

// Handle connection error and retrying after 5s
mongoose.connection.on('error', error => {
  console.log(`ERROR - Connection failed: ${ error.message }`)

  setTimeout(async () => {
    console.log('SETUP - Connecting database.. retrying..')

    await connectWithRetry()
  }, 5000)
})

// Retry connection
const connectWithRetry = async () => {
  return await mongoose.connect(
    env.MONGO_URL,
    {
      useNewUrlParser: true,
      useCreateIndex: true,
      useFindAndModify: false,
      useUnifiedTopology: true
    }
  )
}
