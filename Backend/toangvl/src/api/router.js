module.exports = function(router) {

    router.get('/test', function(req, res) {
            return res.send("hello this is aest")
    });
    
    router.get('/test1', function(req, res) {
            return res.send("hello this is aest")
    })
}