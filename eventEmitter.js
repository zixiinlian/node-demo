var server = require('httpServer'),
	event = require('events').EventEmitter;

var callback = function(){

};

server.on('connect', callback);
server.removeListener('connect', callback);