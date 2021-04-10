/*Your function will be given an array of numbers. The set of numbers will either be all even numbers with one odd number, or all odd numbers with one even number.

Your function needs to find this outlier number and return it.

I.e.

[1, 3, 4, 7, 9, 11]: outlier is 4, return 4.
[2, 4, 6, 10, 11, 14]: outlier is 11, return 11.
*/

let detectOutlierValue = function (array) {
  // Implement your code below
  let oddCount = 0;
  let evenCount = 0;
  for (let i = 0; i < array.length; i++) {
    if (array[i] % 2 !== 0) {
      oddCount++;
    }
    if (array[i] % 2 == 0) {
      evenCount++;
    }
  }
  //  console.log(oddCount,evenCount)
  let oddArray = oddCount > evenCount ? false : true;
  for (let j = 0; j < array.length; j++) {
    if (oddArray && array[j] % 2 == 1) {
      return array[j];
    }
    if (!oddArray && array[j] % 2 == 0) {
      return array[j];
    }
  }
};

console.log(detectOutlierValue([1, 3, 4, 7, 9, 11]));
// -> 4
console.log(detectOutlierValue([2, 4, 6, 10, 11, 14]));
// -> 11
