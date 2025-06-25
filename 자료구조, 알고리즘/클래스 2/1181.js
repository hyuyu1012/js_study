// trim() 메소드를 사용하지 않아서 앞에 개행

const fs = require('fs');
const init = fs.readFileSync("example.txt").toString().split("\n");
const n = init.shift();

// 중복 제거
const set = new Set(init);
const init2 = [...set]

init2.sort((a,b) => {
  if(a.length > b.length) {
    return 1;
  }
  else if (a.length < b.length) {
    return -1
  }

  else if (a.length === b.length) {
    if (a > b) {
      return 1;
    }
    else {
      return -1;
    }
  }
});
console.log(init2.join("\n"));

