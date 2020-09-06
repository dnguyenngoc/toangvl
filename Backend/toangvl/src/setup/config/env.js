// Imports
const dotenv = require('dotenv')

// Load .env
dotenv.config({ path: '.env.local' })

// Environment
// export const NODE_ENV = process.env.NODE_ENV
exports.NODE_ENV = "DEV"

// Port
exports.PORT = 80