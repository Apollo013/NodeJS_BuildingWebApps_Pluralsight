var express = require('express');
var app = express();
var http = require('http').Server(app);
var path = require('path');
var io = require('socket.io')(http);


// Routing
app.use(express.static(path.join(__dirname, 'public')));

app.get('/', function(req, res){
    //res.sendFile(path.join(__dirname, 'public', 'index.html'));
    res.sendFile('index.html');
});

// Socket.io
io.on('connection', function(socket){
    console.log('user connected');

    // 'chat message' event handler
    socket.on('chat message', function(msg){
        socket.broadcast.emit('chat message',msg);
        console.log('Message: ' + msg);
    });

    // Disconnect
    socket.on('disconnect', function(){
        console.log('user disconnected');
    });
});

// Run
http.listen(3000, function(){
  console.log('listening on *:3000');
});