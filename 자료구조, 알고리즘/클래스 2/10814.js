const fs = require('fs');
const init = fs.readFileSync("example.txt").toString().trim().split("\n").map((line) => line.split(" "));
const n = Number(init.shift());
const result = []

init.sort((a,b) => {
  return (Number(a[0]) - Number(b[0])); 
});


console.log(init.map(arr => arr.join(" ")).join("\n"));
// console.log(init.join("\n"));