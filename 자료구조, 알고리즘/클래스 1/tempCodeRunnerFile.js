const fs = require('fs');

const init = fs.readFileSync('example.txt').toString().trim().split('\n');

const T = Number(init[0]);
for (let i = 1; i <= T; i++){
  let [H, W, N] = init[i].split(" ").map(Number);
  let height = Math.trunc(N % H);
  let width = Math.trunc(N/H) + 1;

  if (height === 0) {
    height = H;
    width = Math.trunc(N/H);
  }

  let result = String(height);


  let count =(String(H) + String(W)).length - (String(height) + String(width)).length 
  for (let j = 0; j < count ; j++) {
    result = result + '0';
  }

  if (result.length === 1){
    result = result + '0';
  }

  result = result + String(width);
  console.log(result);
}