const fs = require('fs');
let str_numbers = fs.readFileSync("example.txt").toString().trim().split("\n");
let i = 0;

while(true) {
  try {
    let numbers = str_numbers[i].split(" ").map(Number);
    console.log(numbers[0] + numbers[1]);
    i++;
  }
  catch {
    break;
  }
}