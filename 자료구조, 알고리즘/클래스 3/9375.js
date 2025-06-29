const fs = require('fs');
const init = fs.readFileSync("example.txt").toString().trim().split("\n");
const t = init.shift();

