const fs = require('fs');
const [str1, str2] = fs.readFileSync("example.txt").toString().split("\n");
const dp = new Array(str1.length).fill(0);

for (let i = 0; i < str2.length; i++) {
  for(let j = 0; j < str1.length; j++) {
    if(str2[i] === str1[j]) {
      console.log(dp.slice(0, j+1));
      dp[j] = Math.max(dp.slice(0, j+1) + 1);
    }
  }
}