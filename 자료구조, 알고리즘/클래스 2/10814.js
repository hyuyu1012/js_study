const fs = require('fs');
const init = fs.readFileSync("example.txt").toString().trim().split("\n");
const n = Number(init.shift());

 init.forEach((s, index) => {
  init[index].split(" ");
 })

console.log(init);