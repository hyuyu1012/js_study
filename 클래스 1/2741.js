const fs = require('fs');
const input = Number(fs.readFileSync("example.txt").toString().trim());

for (let i = 1; i <= input; i++){
  console.log(i);
}