var sys = require('sys');

sys.on('data', function(){
	sys.print('debugger');
	sys.log('debugger');
	sys.debug('debugger');
	sys.inspect(sys, true, null);
});