var express = require("express");

var i, a, b, c, max;
//max = 1000000000;
max = 1000000;
var d = Date.now();
console.log(d);
for (i = 0; i < max; i++) {
    a = 1234 + 5678 + i;
    b = 1234 * 5678 + i;
    c = 1234 / 2 + i;
}
var e = Date.now();
console.log(e);
console.log(e - d);
