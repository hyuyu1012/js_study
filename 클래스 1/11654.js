const fs = require('fs');

const c  = fs.readFileSync('example.txt').toString().trim();
console.log(c.charCodeAt());