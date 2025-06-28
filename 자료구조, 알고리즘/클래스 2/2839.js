const fs = require('fs');
const n = parseInt(fs.readFileSync("example.txt").toString().trim());

let result = 0;
let result2 = 0;
let result3 = 0;

if (n % 5 === 0) {
  result = n /5;
}

