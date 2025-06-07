const fs = require('fs');
const init = fs.readFileSync("example.txt").toString().split("\n");

const [N,M] = init[0].split(" ").map(Number);
const numbers = init[1].split(" ").map(Number);

