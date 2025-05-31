// Array.from() 정적 메소드는 순회 가능 또는 유사 배열 객체에서 얕게 복사된 새로운 Array 인스턴스를 생성한다.


//['f', 'o', 'o']
console.log(Array.from("foo"));

//[2,4,6]
console.log(Array.from([1,2,3], (x) => x + x));
