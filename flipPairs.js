/* 
107 Algorithms: Flip Pairs

For this assignment, I want you to implement the code that will flip every pair of characters in a string.

I.e.

"hello" becomes "ehllo"
"world" becomes "owlrd"
"hello world" becomes "ehll oowlrd"
*/

let flipPairs = function (string) {
  // Implement your code below
  let flippedWords = " ";
  for (let i = 1; i < string.length; i += 2) {
    flippedWords = flippedWords + string[i] + string[i - 1];
  }
  return flippedWords + string.slice(-1);
};

console.log(flipPairs("hello world"));
// -> ehll oowlrd
