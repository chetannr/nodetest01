var fs = require('fs');
var dir =  (process.argv[2] ? process.argv[2] :  '.');

var files = fs.readdirSync(dir);
for (fn in files) {
    console.log(files[fn]);
}
