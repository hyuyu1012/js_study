// js에서는 dict이 없고 object를 활용해야 한다.

const fs = require('fs');
const numbers = fs.readFileSync("example.txt").toString().trim().split('\n').map(Number);

let mul = numbers[0] * numbers[1] * numbers[2];
mul = mul.toString().split('');

var result = {
  "0" : 0,
  "1" : 0,  
  "2" : 0,
  "3" : 0,
  "4" : 0,
  "5" : 0,
  "6" : 0,
  "7" : 0,
  "8" : 0,
  "9" : 0,
}

mul.forEach(element => {
  result[element] = result[element] + 1;
});

for (let key in result){
  console.log(result[key]);
}


