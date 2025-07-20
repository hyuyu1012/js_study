const fs = require('fs');
const n = Number(fs.readFileSync("example.txt").toString().trim());

const dp = new Array(n+1).fill(0);

dp[0] = 0;
dp[1] = 0;

for(let i = 2; i<=n; i++) {
  dp[i] = dp[i-1] + 1;

  let flag = true;
  
  let count = 0;
  let temp = i;
  while(temp !== 1) {
    if(temp % 3 !== 0 && temp % 2 !== 0) {
      flag = false;
      break;
    }
    if(temp%3 === 0) {
      temp = temp /3;
      count = count +1;
    }
    if (temp % 2 === 0 ) {
      temp = temp /2;
      count = count + 1;
    }
  }
  if(flag === true) {
      dp[i] = Math.min(dp[i], count);
    }
}
console.log(dp[n]);