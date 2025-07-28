// 변수를 선언합니다.
let numbers = [273, 25, 75, 52, 103, 32, 57, 24, 76];
// 콜백 함수 채우기
numbers.filter((n) => n % 2 === 0).filter((n) => n <=100).filter((n) => n% 5 === 0);
// 그대로 출력된다. filter 함수는 비파괴적 처리라, 필터링한 배열을 반환하기 때문이다.
console.log(numbers);