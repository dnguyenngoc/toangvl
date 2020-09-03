
// 1. create app is a express handle http and using static file
var app = express();
app.use(express.static('game'));
app.use(express.static('api'));

// 2. create server with port 4201
var server = require('http').createServer(app).listen(
    4201,
    function () {
        console.log("[Backend] Server started express on port 4201")
    }
);

// 3. create socket server listen same port with express
var socket = require('socket.io').listen(server);

socket.on(
    'connection', 
    client => {
        console.log("[Backend] Client connected with id : " + client.id);
    }
);

//  create api rooter load router file
var router = require('api/router');
app.use('/', router);