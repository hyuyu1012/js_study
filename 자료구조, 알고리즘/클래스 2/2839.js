const fs = require('fs');
const n = parseInt(fs.readFileSync("example.txt").toString().trim());
const result = [];

if (n % 3 === 0) {
  if(n % 5 === 0) {
    result.push(n/5);
  }
  else{
    result.push(n/3);
  }
}

if((n % 5) % 3 === 0) {
  result.push(Math.trunc(n/5) + (n % 5)/3);
}

if((n % 3) % 5 === 0){
   result.push(Math.trunc(n/3) + (n % 3)/5);
 }

if (result.length === 0 ) {
  console.log(-1);
}
else {
  console.log(Math.min(...result));
}
