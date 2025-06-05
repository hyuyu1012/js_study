const fs = require('fs');
const init = fs.readFileSync("example.txt").toString().split("\n").map(Number);


const arr = new Array(14).fill(0).map(() => new Array(14));


//for (let i = 1; i<=init.length-1; i= i+2){}
