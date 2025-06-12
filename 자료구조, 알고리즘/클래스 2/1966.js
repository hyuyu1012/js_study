const fs = require('fs');
const init = fs.readFileSync("example.txt").toString().split("\n");
const t = Number(init[0]);

// 3일 때 1,3,5
for (let i = 1; i<= 2*t-1; i=i+2) {
  // N : 문서의 개수, M : 현재 queue에서 궁금한 문서의 위치 정보

  const [N,M] = init[i].split(" ").map(Number);
  const importants = init[i+1].split(" ").map(Number); 
  const number = importants[M];
  const number2 = number - 0.1;  
  importants[M] = number2;

  
  let count = 0;
  while(true) {

    const max = Math.max(...importants);
    if (max === number | max === number2) {
      break;
    }
    // max 값을 뽑았다면 shift 시키고 count + 1 해주고 반복 종료
    while(true) {
      if(importants[0] === max) {
        importants.shift();
        count = count + 1;
        break;
      }
      else {
        importants.push(importants.shift());
      }
    }    
  }  
}



