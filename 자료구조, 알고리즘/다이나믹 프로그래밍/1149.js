const fs = require('fs');
const input = fs.readFileSync("example.txt").toString().trim().split("\n");
const n = Number(input.shift());

for(let i = 0; i < n; i++) {
  input[i] = input[i].split(" ").map(Number);
}

for(let i = 1; i<n; i++) {
  input[i][0] = Math.min(input[i-1][1] + input[i][0], input[i-1][2] + input[i][0]);
  input[i][1] = Math.min(input[i-1][0] + input[i][1], input[i-1][2] + input[i][1]);
  input[i][2] = Math.min(input[i-1][0] + input[i][2], input[i-1][1] + input[i][2]);
}

console.log(Math.min(...input[n-1]));