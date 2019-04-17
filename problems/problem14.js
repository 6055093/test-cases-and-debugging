let verifyEquals = require('./verify-equals.js');

// we need 5 test cases.
let inputs = [
  'Lorem ipsumos dolor sit amet consectetur adipisicing elit. Magni quisquam',
  'Lorem ipsumos dolor sit amet consectetur adipisicing elit. Magni quisquam',
  'Lorem ipsumos dolor sit amet consectetur adipisicing elit. Magni quisquam',
  'Lorem ipsumos dolor sit amet consectetur adipisicing elit. Magni quisquam',
  'Lorem ipsumos dolor sit amet consectetur adipisicing elit. Magni quisquam',
];

let outputs = [
  'Lorem ipsumos dolor sit amet consectetur\nadipisicing elit. Magni quisquam',
  'Lorem ipsumos dolor sit amet consectetur\nadipisicing elit. Magni quisquam',
  'Lorem ipsumos dolor sit amet consectetur\nadipisicing elit. Magni quisquam',
  'Lorem ipsumos dolor sit amet consectetur\nadipisicing elit. Magni quisquam',
  'Lorem ipsumos dolor sit amet consectetur\nadipisicing elit. Magni quisquam',
];

/*
Make this function return the input string wrapped to 40 characters per line. 
This means you'll have to insert a newline \n character after every 40 characters in the input string. 
If the next character after a cut is a space, then do not display it. 

For example with the input:

Lorem ipsumos dolor sit amet consectetur adipisicing elit. Magni quisquam

the output would be:

Lorem ipsumos dolor sit amet consectetur
adipisicing elit. Magni quisquam

instead of:

Lorem ipsumos dolor sit amet consectetur
 adipisicing elit. Magni quisquam

even though there is a space before the a in adipisicing
*/
function f(str) {
  let result = '';
  while (str.length > 0) {
    console.log(str.substring(40, 41));
    if (str.substring(40, 41) === ' ') {
      str = str.substring(0, 40) + str.substring(41);
    }
    if (str.length < 40) {
      result += str;
      break;
    }
    result += str.substring(0, 40) + '\n';
    str = str.substring(40);
  }
  return result;
}

//This function runs a test. You do not need to change any code under here
function runTest(i) {
  if (i >= inputs.length) throw new Error('You do not have enough test cases');
  let expected = outputs[i];
  let actual = f(inputs[i]);
  console.log(expected);
  console.log(actual);
  verifyEquals(expected, actual);
}

runTest(0);
runTest(1);
runTest(2);
runTest(3);
runTest(4);

console.log('All tests passed for ' + __filename);
