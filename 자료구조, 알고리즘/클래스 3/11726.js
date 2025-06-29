const fs = require('fs');
const n = Number(fs.readFileSync(0).toString().trim());

const dp = new Array(n + 1);
dp[1] = 1;
dp[2] = 2;

for (let i = 3; i <= n; i++) {
  dp[i] = (dp[i - 1] + dp[i - 2]) % 10007;
}

console.log(dp[n]);


/*
const fs = require('fs');
const n = Number(fs.readFileSync("example.txt").toString().trim());

const dp = new Array(n);

dp[1] = 1;
dp[2] = 2;

for (let i = 2; i<dp.length; i++) {
  dp[i] = dp[i-1] + dp[i-2];
}

console.log(dp[n-1]%10007);
*/
