const fs = require('fs');
const [N,K] = fs.readFileSync("example.txt").toString().trim().split(" ").map(Number);

function fact(num) {
  let result = 1;
  for (let i = 1; i<=num; i++) {
    result = result * i;
  }
  return result;
}

console.log(fact(N) / (fact(N-K) * fact(K)))

