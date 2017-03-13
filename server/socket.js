const socketio = require('socket.io');

function init(server) {
    var io = socketio(server);
    io.on('connection', function (socket) {
        console.log('socket connected');
    });
    return io;
}

module.exports = init;
