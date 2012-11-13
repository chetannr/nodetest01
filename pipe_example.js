var fs = require('fs');

require('http').createServer(function(req, res = new Buffer(512)) {
    var rs = fs.createReadStream('/var/log/daemon.log', { flags: 'r',
							  encoding: null,
							  fd: null,
							  mode: 0666,
							  bufferSize: 200 * 1024
							});
    res.writeHead(200, {"Content-Type": "text/html"});
    rs.on('data', function(data) {
	if (!res.write(data)) {
	    res.write('<h1>pausing....</h1>');
	    rs.pause();
	}
    });
    res.on('drain', function() {
	rs.resume();
    });
    rs.on('end', function() {
	res.end();
    });
}).listen(4000);
