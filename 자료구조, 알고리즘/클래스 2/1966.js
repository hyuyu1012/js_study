const fs = require('fs');
const init = fs.readFileSync("example.txt").toString().trim().split("\n");

const t = Number(init[0]);

for (let i = 1; i<= 2*t; i = i + 2) {
  const [N,M] = init[i].split(" ").map(Number);
  const numbers = init[i+1].split(" ").map(Number)

  
}