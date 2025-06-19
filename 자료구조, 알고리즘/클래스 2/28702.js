const fs = require('fs');

const [A,B] = fs.readFileSync("example.txt").toString().split("\n").map(Number);

console.log(A+B);