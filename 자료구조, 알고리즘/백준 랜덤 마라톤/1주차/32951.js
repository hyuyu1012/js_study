const fs = require('fs');
const year = Number(fs.readFileSync("example.txt").toString().trim());

console.log(year - 2024);