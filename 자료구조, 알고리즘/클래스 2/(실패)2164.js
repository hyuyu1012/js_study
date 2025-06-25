const fs = require('fs');
const N = Number(fs.readFileSync("example.txt").toString().trim());
const arr = Array.from(new Array(N), (x, i) => i+1);

while(arr.length !== 1) {
  arr.shift();
  number = arr.shift();
  arr.push(number);
}

console.log(arr[0]);