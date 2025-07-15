const fs = require('fs');
const [N, M] = fs.readFileSync("example.txt").toString().trim().split(" ").map(Number);
const result = [];

const dfs = (n, arr) => {
  // 종료 조건
  if(n===M) {
    result.push(arr.join(" "));
    return;
  }

  for(let j = 1; j < N + 1; j++) {
    if(j < arr[arr.length -1]) continue;
    arr.push(j);
    dfs(n+1, arr);
    arr.pop();
  }
}

dfs(0, []);
console.log(result.join("\n"));