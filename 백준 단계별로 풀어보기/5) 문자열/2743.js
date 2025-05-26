const fs = require('fs');
const s = fs.readFileSync("example.txt").toString().trim();
console.log(s.length);