import { readNumber, display } from '../../../../lib/dom-io.js';

document.getElementById('do-math').addEventListener('click', () => {
  // read user values
  const left = readNumber('left');
  const right = readNumber('right');

  let num  =  10

  // use a for loop to multiply the two numbers
  const result = left * right;

  for (let i = 0; i < num.length; 1++){
    console.log(num)
  }

  // display the product

  display('product', result);

  display(readNumber, num[i])
});
