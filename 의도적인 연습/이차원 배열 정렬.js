const arr = [['1',2],['11',2] ,['0',1], ['-1',3]];

arr.sort((a,b) => {
  return a[0] - b[0];
})  
console.log(arr);