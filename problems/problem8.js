let verifyEquals = require('./verify-equals.js');

// we need 5 test cases.
let inputs = ['hello', 'bye', 'this', 'is', 'reversed'];

let outputs = ['olleh', 'eyb', 'siht', 'si', 'desrever'];

/*
Make this function return the input string, reversed. For example "hello" would return "olleh" and "how are you" would return "uoy era woh".
You must use at least one for loop for this exercise.

HINTS: 
 - Split your string into an array of characters
 - Create an empty array
 - Loop over the array of split characters in reverse order and fill the empty array by pushing each character into it
 - Convert the filled array into a string (use the join method) and return it
*/
function f(str) {
  let reverseArray = [];
  let charArray = str.split('')
  for(let i = 0; i < str.length; i++){
    reverseArray.push(charArray.pop())
  }
  reverseArray = reverseArray.join('')
  console.log(reverseArray)
  return reverseArray
}

//This function runs a test. You do not need to change any code under here
function runTest(i) {
  if (i >= inputs.length) throw new Error('You do not have enough test cases');
  let expected = outputs[i];
  let actual = f(inputs[i]);
  verifyEquals(expected, actual);
}

runTest(0);
runTest(1);
runTest(2);
runTest(3);
runTest(4);
console.log('All tests passed for ' + __filename);
