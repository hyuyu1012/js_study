const fs = require('fs');
const [N, M] = fs.readFileSync("example.txt").toString().split(" ").map(Number);

console.log(M-N,M);