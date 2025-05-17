const fs = require('fs');
const init = fs.readFileSync("example.txt").toString().trim();
console.log(init+"??!");