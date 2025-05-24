const fs = require('fs')
const init = Number(fs.readFileSync("example.txt").toString().trim());

console.log(init-543);