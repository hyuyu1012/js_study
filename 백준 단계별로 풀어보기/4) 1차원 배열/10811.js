const fs = require('fs');
const init = fs.readFileSync("example.txt").toString().trim().split("\n");
const [N,M] = init[0].split(" ").map(Number);

let arr = new Array(N).fill().map((arr, i) => {
  return i + 1;
});

for (let a = 1; a <=M; a++) {
  const [i,j] = init[a].split(" ").map(Number);
  const temp = j - i;
  
}