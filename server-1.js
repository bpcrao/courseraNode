var http = require('http');

var hostname='localhost';

var port = 3000;

var server = http.createServer(function(request,response){
	console.log(request.headers);
	response.writeHead(200,{'Content-type':'text/html'});
	response.end("<h1>Hello World</h1>");
});
