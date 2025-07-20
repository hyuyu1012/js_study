const fs = require('fs');
const n = Number(fs.readFileSync("example.txt").toString().trim());

const dp = new Array(n+1).fill(0);
dp[0] = 0;
dp[1] = 0;

for (let i = 2; i <=n; i++) {
  let temp = i;
  let count = 0;

  while(true) {
    if(temp === 1) {
      dp[i] = count;
      break;
    }
    if(dp[temp] !== 0) {
       dp[i] = dp[temp] + count;
       break;
    }
    if (temp % 3 === 0) {
      temp = temp / 3;
      count+=1;
    }
    else if (temp % 2 === 0) {
      temp = temp / 2;
      count+=1;
    }
    else {
      temp = temp - 1;
      count +=1;
    }
  }
}

console.log(dp[n]);
