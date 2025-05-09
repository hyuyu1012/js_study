const fs = require('fs');
const input = fs.readFileSync('example.txt').toString().trim().split("\n");

const s = input[0];
const i = Number(input[1]);


console.log(s[i-1]);