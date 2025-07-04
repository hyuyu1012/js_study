// Js array로 stack 구현
// Js의 array는 stack은 아니지만 관련 메소드를 지원한다.

// Js의 array는 인덱스를 key로 가지는 특수한 객체로 자유롭게 크기 조절이 가능하다.
// 객체이기 때문에, 중간에 빈 값도 허용된다!!

// 배열 선언
const arr = [];

// push 연산
arr.push(1);

// pop 연산
arr.pop();

// top
arr.push(2);
let top  = arr[arr.length -1];
console.log(top);

