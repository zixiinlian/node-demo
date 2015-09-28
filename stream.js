var fs = require('fs'),
	readStream = fs.createReadStream('/file/readfile'),
	writeStream = fs.createWriteStream('/file/writefile');

readStream.on('data', function(chunk){
	if(writeStream.write(chunk) === false){
		readStream.pause();		
	}
});

readStream.on('end', function(){
	writeStream.end();
});

writeStream.on('drain', function(){
	readStream.resume();
})