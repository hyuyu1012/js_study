const fs = require('fs');
const N = Number(fs.readFileSync("example.txt").toString().trim());
const result = [];

for (let i = N; i>=1; i--) {
  result.push(i);
}
console.log(result.join("\n"));