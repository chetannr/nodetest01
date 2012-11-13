/*
var server = http.createServer(function (request, response) {
	console.log('new request');
	response.writeHead(200, {
		'Content-Type': 'text/plain'
        });

	response.write('Hello World!');
	response.end();
});
server.listen(4000);
*/
var http = require('http');

var body = 'Hello World';

http.createServer(function(request, response){
	console.log('new request');
	response.writeHead(200, { 'Content-Type': 'text/plain', 'Server': 'Gary', 'Content-Length': body.length });
	response.end(body)
}).listen(4000);
