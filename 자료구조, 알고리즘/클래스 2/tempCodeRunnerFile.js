// map 자료형으로도 풀어보자
// const { count } = require('console');
const fs = require('fs');
const init = fs.readFileSync("example.txt").toString().trim().split("\n").map(Number);
const n = init.shift();

// 중앙값을 찾기 위해서 정렬
init.sort((a,b) => {
  return a - b;
});

// 안전범위 안이니 Number형으로 진행해도됨
function FindMean() {
  const initValue = 0;
  const sum = init.reduce((accumulator, currentValue) => accumulator + currentValue, initValue);
  const mean = (sum/n).toFixed(0)
  console.log(mean)
}

function FindMedian() {
  if (init.length === 1) {
    console.log(init[0]);
  }
  else {
    console.log(init[(init.length - 1)/2]);
  }
}

function findMode() {
  const countObj = {};
  init.forEach((number) => {
    if(String(number) in countObj) {
      countObj[number] +=1;
    }
    else{
      countObj[number] = 1;
    }
  });

  const maxValue = Math.max(...Object.values(countObj).map(Number));
  const haveMaxValueList = Object.entries(countObj).filter((arr) => arr[1] === maxValue);
  haveMaxValueList.sort((a,b) => {
    return Number(a[0]) - Number(b[0]); 
  });

  // console.log(haveMaxValueList);
  if (haveMaxValueList.length === 1) {
    console.log(Number(haveMaxValueList[0][0]))
  }
  else {
    console.log(Number(haveMaxValueList[1][0]));
  }
  
}

function findRange() {
  console.log(init[init.length - 1] - init[0]);
}

FindMean();
FindMedian();
findMode();
findRange();
