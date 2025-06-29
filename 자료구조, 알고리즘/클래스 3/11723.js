const fs = require('fs');
const init= fs.readFileSync("example.txt").toString().trim().split("\n");
const n = init.shift();

const mySet = new Set();
const result = [];

function add(x) {
  mySet.add(x);
}

function remove(x) {
  mySet.delete(x);
}

function check(x) {
  if(mySet.has(x)) {
    result.push(1);
  }
  else {
    result.push(0);
  }
}

function toggle(x){
  if(mySet.has(x)) {
    mySet.delete(x);
  }
  else {
    mySet.add(x);
  }
}

function all(){
  mySet.clear();
  for (let i = 1; i <= 20; i++) {
  mySet.add(i);
  }
}

function empty() {
  mySet.clear();
}



init.forEach(element => {
  const temp = element.split(" ");

  if(temp[0] === 'add'){
    add(Number(temp[1]));
  }
  else if(temp[0] === 'remove') {
    remove(Number(temp[1]));
  }
  else if(temp[0] === 'check') {
    check(Number(temp[1]));
  }
  else if(temp[0] === 'toggle') {
    toggle(Number(temp[1]));
  }
  else if(temp[0] === 'all') {
    all();
  }
  else if(temp[0] === 'empty') {
    empty();
  }
})

console.log(result.join("\n"));