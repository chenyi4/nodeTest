var fs = require('fs');

fs.readFile('read.txt', function(err, data){
    if(err) return false;
    console.log(data.toString());
});

console.log("执行程序已经结束");