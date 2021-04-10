let findPairForSum = function (array, sum) {
  // Implement your code below
  for (let i = 0; i < array.length; i++) {
    for (let j = i + 1; j < array.length; j++) {
      if (array[i] + array[j] == sum) {
        return array[i] > array[j]
          ? [array[j], array[i]]
          : [array[i], array[j]];
      }
    }
  }
};

console.log(findPairForSum([3, 7, 10, 15, 9], 19));
// -> [9, 10]
console.log(findPairForSum([6, 8, 12, 14, 2, 4], 6));
// -> [2, 4]
