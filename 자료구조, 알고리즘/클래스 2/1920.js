const fs = require('fs');
const init = fs.readFileSync("example.txt").toString().trim().split("\n");

const arr = init[1].split(" ").map(Number).sort((a,b) => a-b);
const needFindNumber = init[3].split(" ").map(Number);

needFindNumber.forEach(number => {
  
})