var http = require('http');
var logger = require('./custom-modules/logger');

http.createServer(function(request, response){
    response.writeHead(200,{'Content-Type': 'text/plain'});
    logger.info('Hello there');    
    response.end('hello big boy');
}).listen(3000);