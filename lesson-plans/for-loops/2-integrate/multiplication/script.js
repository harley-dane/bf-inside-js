import { readNumber, display } from '../../../../lib/dom-io.js';

document.getElementById('do-math').addEventListener('click', () => {
  // read user values
  const left = readNumber('left');
  const right = readNumber('right');

  // use a for loop to multiply the two numbers
  const result = left * right;

  // display the product

  display('product', result);
});
