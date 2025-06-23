const fs = require('fs');
const numbers = fs.readFileSync("example.txt").toString().trim().split("\n").map(Number);
const n = numbers.shift();

// stack에 넣을 원소 배열
const arr = Array.from(new Array(n), (x,i) => i + 1);

const stack = [];
let start = 0;
let result = '';

for(let i = 0; i<numbers.length; i++) {
  const number = numbers[i];
  if(number < start) {
    console.log("NO");
    break;
  }

  while (number === stack[stack.length - 1]) {
    stack.push(arr.shift())
    result = result + '+\n';
  }

  stack.pop();
  result = result + '-\n';
}

console.log(result);


