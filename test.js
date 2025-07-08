const arr = new Array(5).fill(new Array(5).fill(0));
console.log(arr);

// map() 함수는 존재하는 요소들에 대해서만 callback을 진행한다.
const arr2 = new Array(5).map((element) => true);
console.log(arr2);
