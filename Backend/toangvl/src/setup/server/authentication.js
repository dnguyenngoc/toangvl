// Imports
const jwt = require('jsonwebtoken')

// App Imports
const env = require('../config/env.js')
const decrypt = require('../helper/decrypt.js')


const Account = require('')

// Authentication middleware
module.exports = async function (request, next) {
  let header = request.headers.authentication

  // Check header have token
  if (header && header !== null) {
    try {
    
      // Get token from header
      const token = header.split(' ')

      // Decrypt token
      const tokenJwt = decrypt()
      
      const userToken = jwt.verify(token[1], env.SECURITY_SECRET)
      let user = await Account.findOne({ _id: userToken.id })

      if(user) {
        request.auth = {
          isAuthenticated: true,
          user
        }
      }
    } catch (e) {
      console.warn('Invalid token detected.')
    }
  } else {
    request.auth = {
      isAuthenticated: false,
      user: null
    }
  }

  next()
}