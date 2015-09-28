//用来处理IP/UDP数据传输，用在SOCKETS上
//server
var dgram = require('dgram');
var server = dgram.createSocket('notice');

server.on('message', function(msg){
	console.log(msg);
});

server.on('listening', function(){
	var address = server.address();
	
	console.log('server is listening on' + address.address + ':' + address.port);
});

//client
var dgram = require('dgram');
var message = new Buffer('this is a message');
var client = dgram.createSocket('notice');

client.send(message,0, message.length,41234,'localhost', function(err, bytes){
	client.close();
});