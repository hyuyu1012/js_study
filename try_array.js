const scores = [2, 3, 10, 1, 100];
scores.sort((a, b) => {
  console.log(a,b);
  return a - b
});
console.log(scores); // [1, 2, 3, 10, 100]