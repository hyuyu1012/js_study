const fs = require('fs');

const input = fs.readFileSync("example.txt").toString().trim().split("\n").map(Number);
const t = input.shift();
const result = [];
const dp = [];
dp[0] = [1,0];
dp[1] = [0,1];

for (let i = 2; i <=40; i++) {
  dp.push([]); 
  dp[i][0] = dp[i-1][0] + dp[i-2][0];
  dp[i][1] = dp[i-1][1] + dp[i-2][1];
}

input.forEach(n => {
  const ans = dp[n][0] + ' ' + dp[n][1];
  result.push(ans);
})

console.log(result.join("\n"));
