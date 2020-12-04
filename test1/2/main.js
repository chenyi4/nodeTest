var fs = require('fs');

var data = fs.readFileSync('read.txt');

console.log(data.toString());
console.log("程序执行结束!");