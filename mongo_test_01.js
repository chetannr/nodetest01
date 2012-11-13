var db = require('mongo-lite').connect('mongodb://localhost/test', ['posts', 'comments']);
db.posts.insert({title: 'first'}, function(err, doc){});
