const fs = require('fs');
const init = fs.readFileSync("example.txt").toString().split("\n");

const n = Number(init[0]);
const numbers = init[1].split(" ").map(Number);

let count = 0;

numbers.forEach(number => {
  if (number === 1) {
      count = count + 1;
    } 
  for(let i = 2; i< number; i++) {
    if (number % i === 0) {
      count = count + 1;
      break;
    }
  }
})

console.log(numbers.length - count);