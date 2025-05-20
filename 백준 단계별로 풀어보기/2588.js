const fs = require('fs')
const init = fs.readFileSync("example.txt").toString().trim().split("\n").map(Number);
const A = [...init[0]];
console.log(A);