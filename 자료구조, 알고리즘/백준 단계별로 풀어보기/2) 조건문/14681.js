const fs = require('fs');
const init = fs.readFileSync("example.txt").toString().trim().split("\n").map(Number);
const x = init[0];
const y = init[1];

if (x > 0 && y > 0 ){
  console.log("1");
}
else if (x < 0 && y > 0 ){
  console.log("2");
}
else if (x < 0 && y < 0 ){
  console.log("3");
}

else if (x > 0 && y < 0 ){
  console.log("4");
}