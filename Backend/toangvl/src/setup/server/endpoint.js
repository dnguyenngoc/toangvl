// Imports
const authentication = require('./authentication.js')

// Start endpoint
module.exports = function(server) {
    console.info('SETUP - Start Endpoint..')

    // API endpoint
    server.all(
        params.endpoint.url, [authentication], async (request, response) => {
            let result = {
            success: false,
            message: 'Please try again.',
            data: null
            }
            // Check if operation to be called is set
            if(request.body.operation) {
                try {
                    // Execute operation
                    // operationName({ params, fields, auth })
                    const { data, message = 'Good request..' } = await modules[request.body.operation]({
                        params: request.body.params || {},
                        fields: request.body.fields || {},
                        auth: request.auth, 
                    })
            
                    // Operation executed successfully
                    result.success = true
                    result.data = data
                    result.message = message
                } catch (error) {
                    result.message = modules[request.body.operation] === undefined ? `${ request.body.operation } operation is not available.` : error.message
                }
            }

            // Log info in development mode
            if(env.NODE_ENV === 'development') {
                console.log(request.body)
                console.log(result.success, result.message)
            }
  
            // Send response
            response.send(result)
        
        }
    )
    
}