  const fs = require('fs');
  const init = fs.readFileSync("example.txt").toString().trim().split("\n");

  const t = Number(init[0]);

  for (let i = 1;  i <=t; i++) {
  const init2 = init[i].split(" ").map(Number);
  console.log(`Case #${i}: ${init2[0] + init2[1]}`); 
  }
