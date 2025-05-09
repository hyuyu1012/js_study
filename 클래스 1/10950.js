const input = require('fs').readFileSync("example.txt").toString().split("\n");

// 자바스크립트에서 비교 연산자는 서로 다른 타입끼리 비교할 때 숫자로 강제 변환한다.
for(let i = 1; i<=input[0]; i++){
  let numbers = input[i].split(" ").map(Number);
  console.log(numbers[0] + numbers[1]);
}