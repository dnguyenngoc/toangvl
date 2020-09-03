// Imports
import dotenv from 'dotenv'

// Load .env
dotenv.config({ path: '.env.local' })

// Environment
export const NODE_ENV = process.env.NODE_ENV

// Port
export const PORT = process.env.PORT