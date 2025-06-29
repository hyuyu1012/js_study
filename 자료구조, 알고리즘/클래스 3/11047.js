const fs = require('fs');
const init = fs.readFileSync("example.txt").toString().trim().split("\n");
let [N,K] = init.shift().split(" ");

const coins = init.map(Number).reverse();
let count = 0;

// console.log(coins);

coins.forEach((coin) => {
  if(K >=coin) {
    while(K >=coin) {
      K = K - coin;
      // console.log(K);
      count = count + 1;
    }
  }
})

console.log(count);

