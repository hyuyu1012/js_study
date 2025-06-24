// sort는 정렬된 새로운 배열을 생성해주는 것이 아니라, 기존의 배열을 정렬해주는 것이다.
// js에서 sort는 유니코드 코드 포인트의 순서를 따른다. 배열의 요소가 숫자타입이라 할지라도 일시적으로 문자열로 변환 후 유니코드 코드 포인트의
// 순서를 기준으로 정렬한다.



const fs = require('fs');
const init = fs.readFileSync("example.txt").toString().trim().split("\n").map(Number);
const n = init.shift();

init.sort();

