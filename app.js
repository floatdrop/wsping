var express = require('express'),
	app = express(),
	http = require('http'),
	server = http.createServer(app),
	io = require('socket.io').listen(server);
var port = process.env.PORT || 80;

app.use(express.static(__dirname + '/public'));

server.listen(port);

console.log("Server started at http://localhost:" + port);

io.set('log level', 3);

io.sockets.on('connection', function (socket) {
	socket.on('message', function () {
		socket.emit('pong', (new Date()).getTime());
	});
	socket.on('disconnect', function () {});
});