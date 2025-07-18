const fs = require('fs');
const n = Number(fs.readFileSync("example.txt").toString().trim());
const dp = new Array(n+1).fill();

dp[0] = 0;
dp[1] = 0;
for(let i = 2; i<=n; i++) {
  dp[i] = dp[i-1] + 1;
}

console.log(dp);
console.log(dp[n])