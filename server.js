var http = require('http');

// Server
http.createServer(function(request, response){
    response.writeHead(200,{'Content-Type': 'text/plain'});
    response.end('hello There!');
}).listen(3000);