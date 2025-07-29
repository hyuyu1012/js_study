const fs = require('fs');
const input = fs.readFileSync("example.txt").toString().trim().split("\n");
const n = Number(input[0]);
const arr = input[1].split(" ").map(Number);

const dp = [];
dp[0] = 1;

for(let i = 1; i < n; i++) {
  
}