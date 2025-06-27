const init = [1,1,2,3,4,5];
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
console.log(testObj);