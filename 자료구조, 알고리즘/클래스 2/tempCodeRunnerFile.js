const fs = require('fs');
const init = fs.readFileSync("example.txt").toString().trim().split("\n");
const n = init[0];
const stack = [];

function push(stack, number) {
  stack.push(number);
}

function pop(stack) {
  if(stack.length === 0) {
    console.log(-1)
  }
  else {
  console.log(stack.pop());
  }
}

function size(stack) {
  console.log(stack.length);
}

function empty(stack) {
  if(stack.length === 0) {
    console.log(1);
  }
  else {
    console.log(0);
  }
}
function top(stack) {
  console.log(stack[stack.length-1]);
}


for(let i = 1; i<=n; i++) {
  const init2 = init[i].split(" ")
  const cmd = init2[0]

  if(cmd === "push") {
    push(stack, init2[1]);
  }
  else if (cmd === "pop") {
    pop(stack);
  }
  else if (cmd === "size") {
    size(stack);
  }
  else if (cmd === "empty") {
    empty(stack);
  }
  else if (cmd === "top") {
    top(stack);
  }
}