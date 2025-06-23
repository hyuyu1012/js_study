const fs = require('fs');
const numbers = fs.readFileSync("example.txt").toString().trim().split("\n").map(Number);

const n = numbers.shift();
const stack = [];

let start = 0;
let flag = true;
const answer =[];

for (let i = 0; i< numbers.length; i++) {
  const number = numbers[i];
  if(number< start) {
    
  }
}