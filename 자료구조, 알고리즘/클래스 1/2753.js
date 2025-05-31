const fs = require('fs');
input = Number(fs.readFileSync("example.txt").toString().trim());

if((input % 4 === 0 && input % 100 !== 0) || input % 400 === 0 ){
  console.log(1);
}

else{
  console.log(0);
}