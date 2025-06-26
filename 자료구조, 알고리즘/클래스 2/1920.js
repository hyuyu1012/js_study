const fs = require('fs');
const init = fs.readFileSync("example.txt").toString().trim().split("\n");
const arr = init[1].split(" ").map(Number).sort((a,b) => a-b);
const findNumbers = init[3].split(" ").map(Number);
const result = [];

function binarySearch(arr, number, low, mid, high) {
  if(low > high) {
    return 0;
  }  
  
  mid = Math.trunc((low + high) /2);

  if(arr[mid] === number) {
    return 1;
  }

  else if(number >  arr[mid]) {
    return binarySearch(arr, number, mid + 1, mid, high);
  }

  else if(number < arr[mid]) {
    return binarySearch(arr, number, low, mid, mid - 1);
  }
}

findNumbers.forEach((number) => {
  result.push(binarySearch(arr, number, 0, Math.trunc((arr.length-1) /2), arr.length-1));
})

console.log(result.join("\n"));