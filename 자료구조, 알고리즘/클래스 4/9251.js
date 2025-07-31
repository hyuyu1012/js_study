const fs = require('fs');
const [str1, str2] = fs.readFileSync("example.txt").toString().split("\n");
