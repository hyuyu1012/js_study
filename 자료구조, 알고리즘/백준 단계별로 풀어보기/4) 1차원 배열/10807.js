const fs = require('fs');
const init = fs.readFileSync("example.txt").toString().trim().split("\n");

const n_array = init[1].split(" ");
const v = init[2]

let count = n_array.filter(element => element === v).length;

console.log(count);