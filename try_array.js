//배열의 본질은 객체
// 순서가 있는 자료구조, 요소들의 나열, 길이, 들어가는 요소를 가변적으로 정할 수 있다.

const arr = [1,2,3];
console.log(arr);

const arr2 = Array();
console.log(arr2);


// undefined 3개
const arr3 = Array(3);
console.log(arr3);
console.log(arr3[0]);


const arr4 = Array('4');
console.log(arr4);

const arr5 = new Array(1);
console.log(arr5);

const arr6 = new Array('1');
console.log(arr6);


const arr7 = new Array(2).fill(0);
console.log(arr7);

const arr8 = new Array('2').fill(1);
console.log(arr8);

const arr9 = new Array(14).fill(0).map((v,i) => i+1);
console.log(arr9);