const fs = require('fs');
const n = Number(fs.readFileSync("example.txt").toString().trim());

function fact(n) {
  let result = 1;
  for (let i = 1; i<=n; i++){
     result = result * i;
  }
  return result;
}
const arr = String(fact(n)).split("").reverse();


let count = 0;
for (let i = 0; i< arr.length; i++) {
  if(arr[i] === '0') {
    count = count + 1;
   }
  else {
    console.log(count);
    break;
  }
}