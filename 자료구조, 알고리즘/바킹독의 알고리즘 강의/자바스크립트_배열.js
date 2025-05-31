//자바스크립트에서 배열을 생성하는 방법은 여러가지가 있지만, 주로 대괄호[] 안에 값을 넣어서 선언하는 문법을 사용한다.
//리터럴
var array = [1,2,3];

// 배열에서 다른 언어와 Js의 차이점은 js의 배열은 python의 list처럼 여러 type이 들어갈 수 있다는 점이다.
var array = [1, "1", true];


// 추가로 배열을 선언하는 방법
// 자바스크립트에서 Array()는 내장된 생성자 함수로써, 함수처럼 호출해도 되고, 생성자처럼 호출해도 되는 함수이다.

// Array 객체의 생성자
var array = Array(1, true, false);
// new 연산자를 이용한 Array 객체 생성 방법
var array = new Array(1, false);

//Array 클래스의 정적 메소드를 활용하는 방법들.
//Array.of
//Array.from(유사 배열 객체나 이터러블을 배열로 변환할 때 사용)


// 배열 값 추가 방법
//[ 1, 2, 3, <2 empty items>, true ]
// 인덱스에 대응하는 배열 요소가 없는 부분을 배열의 hole이라고 한다.
var array = [1,2,3];
array[5] = true;
console.log(array);

// 이 코드에서 array는 자바 Array 클래스의 인스턴스이다.
// push는 배열 인스턴스의 프로토타입 method이다.
array.push(false); 
console.log(array)

// length 프로퍼티를 이용하는 방법. 가장 빠르다.
array[array.length] = true;
console.log(array)

// 자바스크립트에서는 배열이라는 타입(type)을 별도로 제공하지 안흔다. 자바스크립트의 타입을 확인하는 typeof 연산자를 사용해도 'object'를 반환할 뿐이다. 자바스크립트 배열은 일종의 객체 type이기 때문이다.


// 배열인지 아닌지 확인하고 싶을 때
// Array 클래스의 isArray static 메소드
console.log(Array.isArray(array))
// 특정 클래스에 속하는지 확인해주는 연산자 instanceof
console.log(array instanceof Array)
console.log(array instanceof Object)