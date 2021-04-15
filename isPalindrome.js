/*
A palindrome is a word or sentence that's spelled the same way both forward and backward.

Therefore, "ana" is a palindrome, "david" is not.

Can you implement the code of "isPalindrome" so that it will return true if the word is a palindrome? Otherwise return false.
*/

let isPalindrome = function (word) {
  // Implement your code below
  let reverseString = "";
  for (let i = word.length - 1; i >= 0; i--) {
    reverseString += word[i];
  }
  return reverseString === word;
};

console.log(isPalindrome("racecar"));
// -> true
console.log(isPalindrome("hello"));
// -> false
