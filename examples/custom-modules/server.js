var http = require('http'),    
    path = require('path'),
    fs = require('fs');

// Paths
var examplesPath = path.join(__dirname, 'examples');
var customModulesPath = path.join(examplesPath, 'custom-modules');

// Custom modules
var logger = require(path.join(customModulesPath, 'logger'));

var Point = require(path.join(customModulesPath, 'Point'));
var pt = new Point(20,45);
pt.print();


// Server
http.createServer(function(request, response){
    response.writeHead(200,{'Content-Type': 'text/plain'});
    //logger.info('Hello there');    
    response.end('hello There!');
}).listen(3000);