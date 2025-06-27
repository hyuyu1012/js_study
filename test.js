const init = [2,2,1,1,3,4,5];
const testObj = {};

// 자동으로 type 변환이 된다.
init.forEach((number) => {
  if (String(number) in testObj) {
    testObj[number] +=1;
  }
  else {
    testObj[number] = 1;
  }
})

// console.log(Object.values(testObj).map(Number));
const maxValue = Math.max(...Object.values(testObj).map(Number));

// 키 값이 maxValue인 것들을 뽑아와야함.
const haveMaxValueList = Object.entries(testObj).filter((arr) => arr[1] === maxValue);


// 정수형으로 보이는 것만 자동으로 정렬
console.log(haveMaxValueList);
