const fs = require('fs');
const [str1, str2] = fs.readFileSync("example.txt").toString().split("\n");

for(let i = 0; i < str2.length; i++) {
  console.log(str2[i]);
}