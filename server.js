var http = require('http'),    
    path = require('path'),
    fs = require('fs');

// Server
http.createServer(function(request, response){
    response.writeHead(200,{'Content-Type': 'text/plain'});
    //logger.info('Hello there');    
    response.end('hello There!');
}).listen(3000);