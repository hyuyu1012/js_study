const fs = require('fs');
const init = fs.readFileSync(0).toString().trim().split("\n");

const arr1 = init[1].split(" ")
const arr2 = init[3].split(" ")

// 생성자 함수 사용하여 빈 객체 생성
const Obj = new Object();
const result = [];  

arr1.forEach(number => {
  if (number in Obj) {
    Obj[number] += 1;
  }
  else {
    Obj[number] = 1;
  }
})

arr2.forEach(number => {
  if (number in Obj) {
    result.push(Obj[number]);
  }
  else {
    result.push(0);
  }
})

console.log(result.join(" "));