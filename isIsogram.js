/* 
111 Algorithms: Isogram

An isogram is a word that has no repeating letters, whether its consecutive or non consecutive.

The isIsogram function will be passed an string input, determine whether it is an isogram. If it is, return true, otherwise return false.

I.e.

"helo" -> return true
"hello" -> return false
"helicopter" -> return false
"orange" -> return true
*/

let isIsogram = function (word) {
  // Implement your code below;
  for (let i = 0; i < word.length; i++) {
    if (word.indexOf(word[i], i + 1) !== -1) {
      return false;
    }
  }
  return true;
};

console.log(isIsogram("helo"));
// -> true
console.log(isIsogram("helicopter"));
// -> false
