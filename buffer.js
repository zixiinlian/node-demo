// 处理二进制流数据传输
var buffer = new Buffer(245);

buffer.write('buffer text words');
console.log('text:' + buffer.toString('utf-8', 0, buffer.length));
console.log(buffer.length);