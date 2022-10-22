function reverse(word){
  return word.split('').reverse().join('') 
}

function isPalindrome(word) {
  let reversedWord = reverse(word);
  if(reversedWord === word) return true;
  else return false;
}



/* 
  create variable that will represent reversed version of word
  compare those two words
  if they are return true
  if they don't return false
*/

/*
  Add written explanation of your solution here
  I will create a variable that represents a reversed version of a word, named reversedWord. Then I will compare reversedWord and word, and if they are equal I will return true, othervise return false*/

// You can run `node index.js` to view these console logs
if (require.main === module) {
  // add your own custom tests in here
  console.log('Expecting: false')
  console.log('=>', isPalindrome('maxim'));

  console.log("");

  console.log("Expecting: true");
  console.log("=>", isPalindrome("racecar"));

  console.log("");

  console.log("Expecting: false");
  console.log("=>", isPalindrome("robot"));
}

module.exports = isPalindrome;
