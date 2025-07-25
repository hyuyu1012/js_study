const fs = require('fs');
const n = Number(fs.readFileSync("example.txt").toString().trim());

const dp = [];

dp[0] = 0;
dp[1] = 1;
let count = 1;
for(let i = 2; i <=n; i++) {
  if(i >= (count + 1) * (count + 1)) {
    count = count + 1;
  }
  dp[i] = 1 + dp[i- count **2];
}

console.log(dp);
console.log(dp[n]);