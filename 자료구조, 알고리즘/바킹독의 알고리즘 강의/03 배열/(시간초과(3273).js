const fs = require('fs');
const init = fs.readFileSync("example.txt").toString().trim().split("\n");

const n = Number(init[0]);
const arr = init[1].split(" ").map(Number);
const x = Number(init[2]);
let count = 0;

for (let i = 0; i<= n-1; i++) {
  for (let j = i+1; j<=n-1; j++) {
    if (arr[i] + arr[j] === x) {
      count +=1;
    }
  }
}

console.log(count);