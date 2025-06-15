const x = {
  value : 3,
}
console.log(x.value);

function byRefer(y) {
  y.value = y.value * 5;
}

byRefer(x)
console.log(x.value);