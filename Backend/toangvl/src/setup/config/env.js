// Imports
const dotenv = require('dotenv')

// Load .env
dotenv.config({ path: '.env.local' })

// Environment
exports.NODE_ENV = process.env.NODE_ENV

// Port
exports.BACKEND_PORT = process.env.BACKEND_PORT

// Mysql
// exports.MYSQL_URL = process.env.MYSQL_URL

// MongoDB
exports.MONGO_URL = process.env.MONGO_URL

// Authenlication
exports.SECURITY_SECRET = process.env.SECURITY_SECRET