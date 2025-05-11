const fs = require('fs');

const init = fs.readFileSync('example.txt').toString().trim().split('\n');

const T = Number(init[0]);
for (let i = 1; i <= T; i++){
  let result;
  let [H, W, N] = init[i].split(" ").map(Number);

  let height = Math.trunc(N % H);
  let width = Math.trunc(N/H) + 1;


}