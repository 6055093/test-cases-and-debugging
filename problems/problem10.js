let verifyEquals = require('./verify-equals.js');

// we need 5 test cases.
let inputs = [
  'hello world',
  'bye world',
  'sup world',
  'world domination',
  'WORLD IS GONE',
];

let outputs = [
  'Hello World',
  'Bye World',
  'Sup World',
  'World Domination',
  'World Is Gone',
];

/*
Make this function return the input string, capitalized. You must use a for loop. For example:

f("hello world"); // Hello World
f("ALL YOUR BASE ARE BELONG"); // All Your Base Are Belong

HINT:
   - Use a for loop to capitalize the words one by one
   - Use the toUpperCase string method
*/
function f(str) {
  let newArray = str.split(' ');
  let emptyArray = [];
  for (let i = 0; i < newArray.length; i++) {
    let word = newArray[i].toLowerCase();
    emptyArray.push(word.charAt(0).toUpperCase() + word.slice(1));
  }
  console.log(emptyArray);
  return emptyArray.join(' ');
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
