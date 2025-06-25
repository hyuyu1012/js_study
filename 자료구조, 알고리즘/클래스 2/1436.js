const fs = require('fs');
const n = Number(fs.readFileSync("example.txt").toString().trim());

let number = 665;
let count = 0;

while(true) {
  if (String(number).indexOf('666')) {
    count +=1;
  }
  if(count === n) {
    console.log(number);
    break;
  }
  number+=1;
}