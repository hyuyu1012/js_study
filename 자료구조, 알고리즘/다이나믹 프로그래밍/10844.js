const fs = require('fs');
const n = Number(fs.readFileSync("example.txt").toString().trim());

const dp = [];
dp[0] = 0;
dp[1] = 9;


// 1 -> 0 1
// 2 -> 1,2
// 3 -> 2,4
// 