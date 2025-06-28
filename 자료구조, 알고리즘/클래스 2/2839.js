const fs = require('fs');
let number = Number(fs.readFileSync(0).toString().trim());
const result = []

let count = 0;

while(number > 0) {
  if(number % 5 === 0) {
    console.log(count + number /5);
    break;
  }
  number = number - 3;
  count = count + 1;

  if (number === 0) {
    console.log(count);
  }
  else if (number < 0) {
    console.log(-1);
  }
}