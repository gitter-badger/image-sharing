"use strict";

var gui = require('nw.gui');
var CustomTrayMenu = require('./js/custom-tray-menu');
var win = gui.Window.get();
global.main_win = win;

// Extend application menu for Mac OS
if (process.platform == "darwin") {
  var menu = new gui.Menu({type: "menubar"});
  menu.createMacBuiltin && menu.createMacBuiltin(window.document.title);
  win.menu = menu;
}

var $ = function (selector) {
  return document.querySelector(selector);
}

var customTray;

customTray = new CustomTrayMenu('views/custom-tray-menu.html', 'public/icon.png', {
  width: 200,
  height: 180
});

 var app = require('./js/build_server');
 var debug = require('debug')('plex_webdown:server');
 var http = require('http');

 /**
  * Get port from environment and store in Express.
  */

 var port = normalizePort(process.env.PORT || '3001');
 app.set('port', port);

 /**
  * Create HTTP server.
  */

 var server = http.createServer(app);

 /**
  * Listen on provided port, on all network interfaces.
  */

 server.listen(port);
 server.on('error', onError);
 server.on('listening', onListening);



  /**
  * Normalize a port into a number, string, or false.
  */

  function normalizePort(val) {
   var port = parseInt(val, 10);

   if (isNaN(port)) {
     // named pipe
     return val;
   }

   if (port >= 0) {
     // port number
     return port;
   }

   return false;
  }

  /**
  * Event listener for HTTP server "error" event.
  */

  function onError(error) {
   if (error.syscall !== 'listen') {
     throw error;
   }

   var bind = typeof port === 'string'
     ? 'Pipe ' + port
     : 'Port ' + port;

   // handle specific listen errors with friendly messages
   switch (error.code) {
     case 'EACCES':
       console.error(bind + ' requires elevated privileges');
       process.exit(1);
       break;
     case 'EADDRINUSE':
       console.error(bind + ' is already in use');
       process.exit(1);
       break;
     default:
       throw error;
   }
  }

  /**
  * Event listener for HTTP server "listening" event.
  */

  function onListening() {
   var addr = server.address();
   var bind = typeof addr === 'string'
     ? 'pipe ' + addr
     : 'port ' + addr.port;
   debug('Listening on ' + bind);
  }


  win.hide();
