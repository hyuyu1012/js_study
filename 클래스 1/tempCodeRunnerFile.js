const fs = require('fs');
const str = fs.readFileSync('example.txt').toString().trim().split(" ");
console.log(str.length);