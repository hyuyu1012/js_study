const fs = require('fs');
const init = fs.readFileSync("example.txt").toString().trim().split("\n");

const arr1 = init[1].split(" ").map(Number); // 숫자 카드에 적혀있는 정수
const arr2 = init[3].split(" ").map(Number);
const result = [];  

arr2.forEach(arr2Number => {
result.push(arr1.reduce((accumulator, currentValue) => {
    if(currentValue === arr2Number) {
      return accumulator + 1;
    }
    else {
      return accumulator;
    }
  },0));
});

console.log(result.join(" "));
