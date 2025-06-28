const fs =  require('fs');
const init = fs.readFileSync(0).toString().trim().split("\n").map(Number);
const n = init.shift();

const stack = [];
const result = [];
let flag = true;
let i = 0;
let j = 0;


while(j !== stack.length -1) {
  while(stack[stack.length -1] < init[i]) {
    stack.push(i);
    result.push("+");
    i++;
  }
  while(stack[stack.length -1] === init[j]) {
    stack.pop();
    result.push("-");
    j++;
  }

  if(stack[stack.length -1] > init[j]) {
    console.log("NO");
    flag = false;
    break;
  }
}
if(flag === true) {
  console.log(result.join("\n"));
}