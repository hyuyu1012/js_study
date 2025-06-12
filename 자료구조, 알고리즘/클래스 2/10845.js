const fs = require('fs');
const init = fs.readFileSync("example.txt").toString().trim().split("\n");
const queue = [];
const n = init[0];
const result = [];
for (let i = 1; i<=n; i++) {
  const temp = init[i].split(" ");
  const cmd = temp[0];
  
  if(cmd ==="push"){
    queue.push(temp[1])
  }
  else if(cmd ==="pop"){
    if(queue.length===1) {result.push(-1);}
    else {

    }
  }
  else if (cmd === "size") {}
  else if (cmd === "empty") {}
  else if (cmd === "front") {}
  else if (cmd === "back") {}
}

