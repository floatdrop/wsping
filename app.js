
var express = require('express'), socketio = require('socket.io');

var app = express.createServer();
var io = socketio.listen(app);

app.use(express.static(__dirname + '/public'));
app.listen(80);
io.set('log level', 3);

io.sockets.on('ping', function (socket) {
  socket.emit('pong', (new Date()).getTime());
});