var spawn = require('child_process').spawn;

require('http').createServer(function(req, res) {
    console.log('started');
//    var child = spawn('tail', ['-f', '/var/log/system.log']);
//    var child = spawn('find', ['/']);
    var child = spawn('find');
    child.stdout.pipe(res);
    res.on('end', function() {
	child.kill();
    });
}).listen(4000);
