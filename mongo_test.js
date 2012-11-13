var mongoose = require('mongoose');
var db = mongoose.createConnection('localhost', 'test');

var schema = mongoose.Schema({ name: 'string' });
var Cat = db.model('Cat', schema);

var kitty = new Cat({ name: 'Zildjian' });
var 



kitty.save(function (err) {
    if (err) { // ...
	res.end('meow');
    }
    else {
	res.end('hooray');
    }	
});
