// 실패
const fs = require('fs');
const init = fs.readFileSync("example.txt").toString().trim().split("\n");

const N = Number(init[0]);

//현재 줄
const arr = init[1].split(" ").map(Number);
const result = [];
result.push(0);
const stack = [];
stack.push(0);

let flag = true;

for (let i = 0; i < N; i++) {
  while(stack[stack.length-1] < result[result.length -1]) {
    if(stack[stack.length - 1] === result[result.length -1] + 1) {
    result.push(stack.pop());
  }
  
  }
  if(arr[i] === result[result.length -1] + 1) {
    result.push(arr[i]);
  }
  else if(arr[i] !== result[result.length -1] + 1 && stack[stack.length -1] < arr[i] && stack.length === 0  ) {
    flag = false;
    console.log("Sad");
    break;
  }
  else {
    stack.push(arr[i]);
  }
  
  console.log(result);
  console.log(stack);
  console.log("======");
}


if(flag === true) {
  console.log("Nice");
}
  
  



