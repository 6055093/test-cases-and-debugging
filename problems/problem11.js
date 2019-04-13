let verifyEquals = require('./verify-equals.js');

// we need 5 test cases.
let inputs = [[2, 5], [5, 4, 2], [2, 1], [1, 'N', 2], []];

let outputs = [7, 11, 3, 3, 0];

/*
  Make this function return the sum of all the numbers in the input array.
  If any element in the array is not a number, skip it. If the array is empty, return zero.
*/
function f(arr) {
  for (let i = 0; i < arr.length; i++) {
    if (typeof arr[i] !== 'number') {
      arr[i] = 0;
      let sum = arr.reduce((a, b) => a + b, 0);
      console.log(sum);
      return sum;
    }
  }
  let sum = arr.reduce((a, b) => a + b, 0);
  console.log(sum);
  return sum;
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
