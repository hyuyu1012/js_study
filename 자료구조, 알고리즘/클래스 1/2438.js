const fs = require('fs');
const input = Number(fs.readFileSync("example.txt").toString().trim());

for (var i = 1; i <= input; i++){
  for (var j = 1; j<=i; j++) {
    process.stdout.write("*");  
  }
  console.log("");
}