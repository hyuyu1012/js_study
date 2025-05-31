const fs = require('fs');
const str = fs.readFileSync('example.txt').toString().trim()
console.log(str ? str.split(" ").length : 0);