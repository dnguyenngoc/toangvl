const accounts = require('./resources/accounts.js')

module.exports = async function(router) {
        
    // Accounts router
    router.use('/accounts', accounts);  
}