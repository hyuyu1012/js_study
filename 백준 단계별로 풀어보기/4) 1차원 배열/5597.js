const fs = require('fs');
const init = fs.readFileSync('example.txt').toString().split("\n").map(Number);
init.sort(function(a,b) {
  return a-b;
});

