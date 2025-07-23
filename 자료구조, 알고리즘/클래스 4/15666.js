const fs = require('fs');
const input = fs.readFileSync("example.txt").toString().trim().split("\n");

const [N,M] = input[0].split(" ").map(Number);
const array = input[1].split(" ").map(Number).sort((a,b) => b-a);
const result = [];

const dfs = (n, arr) => {
  if(n===M) {
    return;
  }
}


dfs(0, arr);
c