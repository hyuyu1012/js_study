const arr = [[1,2] ,[0,1], [-1,3]];

arr.sort((a,b) => {
  return a[1] - b[1];
})  
console.log(arr);