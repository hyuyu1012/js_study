**Array.from()**
Array.from() 정적 메소드는 순회 가능 또는 유사 배열 객체에서 얕게 복사된 새로운 Array 인스턴스를 생성한다.

//['f', 'o', 'o']
console.log(Array.from("foo"));

//[2,4,6]
console.log(Array.from([1,2,3], (x) => x + x));

Array.from(arrayLike, mapFn, thisArg)

arrayLike : 배열로 변환할 순회 기능 혹은 유사 배열 기능
mapFn : 배열의 모든 요소에 대해 호출할 함수
thisArg : mapFn 실행시에 this로 사용할 값

반환값 : 새로운 Array 인스턴스
