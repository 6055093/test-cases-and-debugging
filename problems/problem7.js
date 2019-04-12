let verifyEquals = require('./verify-equals.js');

// we need 7 test cases.
let inputs = [['foo', 3], ['lol', 2], ['fa', 2], ['doo', 2], ['false', 0], ['wrong', true], ['china', 2]];

let outputs = ['foofoofoo', 'lollol', 'fafa', 'doodoo', '', undefined, 'chinachina'];

/*
The function input is an array. The first element of the array is a string. The second is a number.
Make this function return the string repeated as many times as specified by the second element of the array. 
If a negative number or zero is specified, return an empty string. If any invalid parameters are supplied return undefined.

For example:

f(["foo", 3]) // "foofoofoo"
f(["fo", 3]) // "fofofo"
f(["foo", -1]) // ""
*/
function f(arr) {
 
  if(arr[1] < 1){
    return '';
  }
  if(typeof arr[1] !== 'number' || typeof arr[0] !== 'string'){
    return undefined;
  }
  let newElement = '';
  while(arr[1] > 0){
    newElement += arr[0];
    arr[1]--;  
  }
  return newElement;
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
runTest(5);
runTest(6);
console.log('All tests passed for ' + __filename);
