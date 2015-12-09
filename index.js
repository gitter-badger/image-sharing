
var app = require('express')();
var http = require('http').Server(app);
var io = require('socket.io')(http);
var port = 6000;

app.get('/', function(req, res){
  res.sendfile('index.html');
});

io.on('connection', function(socket){
  console.log('a user connected');
});

http.listen(port , function(){
  console.log('listening on *:'+port );
});

io.on('connection', function(socket){
  console.log('a user connected');
  socket.on('chat message', function(msg){
    console.log('je renvoi '+msg);
    io.emit('chat message', msg);
  });
});
