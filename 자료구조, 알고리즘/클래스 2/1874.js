const fs = require('fs');
const numbers = fs.readFileSync("example.txt").toString().trim().split("\n").map(Number);

//numbers 배열의 크기
const n = numbers.shift();

const stack = [];
let start = 0;
let flag = true;
const result = Array();
for(let i = 0; i<numbers.length; i++) {
  const number = numbers[i];
  if(number < start) {
    flag = false;
  }

  while (number !== stack[stack.length - 1]) {
    stack.push(arr.shift())
    result.push("+");
  }

  stack.pop();
  result.push("-");
  start = stack[stack.length -1];
}

if (flag === true) {
  console.log(result.join("\n"));
}
else {
  console.log("NO");
}
