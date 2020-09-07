// Imports
const dotenv = require('dotenv')

// Load .env
dotenv.config({ path: '.env.local' })

// Environment
// export const NODE_ENV = process.env.NODE_ENV
exports.NODE_ENV = process.env.NODE_ENV

// Port
exports.PORT = process.env.BACKEND_PORT

// Mysql
exports.DATABASE_URL = process.env.DATABASE_URL
exports.DATABASE_USER = process.env.MYSQL_USER
exports.DATABASE_PASSWORD = process.env.MYSQL_PASSWORD
exports.DATABASE_NAME = process.env.MYSQL_DATABASE

// Authenlication
exports.SECURITY_SECRET = process.env.MYSQL_PASSWORD