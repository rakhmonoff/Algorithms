let average = function (array) {
  // Implement your code below
  let sum = 0;
  for (let i = 0; i < array.length; i++) {
    sum = sum + array[i];
  }
  return sum / array.length;
};

console.log(average([1, 3, 5, 7, 9]));
// -> 5
console.log(average([2, 4, 6, 8, 10]));
// -> 6
