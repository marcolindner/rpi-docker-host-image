'use strict';

const express = require('express'),
      io = require('socket.io').listen(express);

const PORT = 8080;

// APP

const app = express();
app.get('/', function(req, res) {
	res.send('Hello World');
});

io.on('connection', function(client) {
	console.log('Client connected!!');

	client.on('join', function (data) {
		console.log(data);
		setTimeout(function() {
			client.emit('messages', new Date.getTime());
		}, 1000);
	});
});

app.listen(PORT);
console.log('Running on http://localhost:' + PORT);