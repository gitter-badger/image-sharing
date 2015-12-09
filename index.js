
var app = require('express')();
var http = require('http').Server(app);
var io = require('socket.io')(http);
var port = 7000;



io.on('connection', function(socket){
  console.log('user connexion');
  socket.on('message', function(msg){
    console.log('je renvoi '+msg);
    io.emit('message', "tkt j'ai recu ->"+msg);
  });
});


/*app.get('/', function(req, res){
  res.sendfile('index.html');
});*/

http.listen(port , function(){
  console.log('listening on *:'+port );
});
