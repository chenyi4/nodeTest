var querystring = require('querystring');
var util = require('util');
var createHtml = require('./createHtml/index');


function route(pathname, request, response){
    switch(pathname){
        case '/favicon.ico':
            break;
        case '/aaa':
            response.writeHead(200, {"Content-Type": "text/plain"});
            response.write("测试模块 World111");
            response.end();
            break;
        case '/testmore':
            var post = '';
            
            request.on('data', function(chunk){
                post += chunk;
                console.log("test more 模块");
            });
                  
            request.on('end', function(){
                post = querystring.parse(post);
            });
                 
            response.write("aaaaaa");
            response.end();
            break;      
        case '/createHtml':
            createHtml.init();
            response.write("createHtml");
            response.end();
            break;
    }
}

exports.route = route;