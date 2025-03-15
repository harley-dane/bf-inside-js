import { readNumber, readString, display } from '../../../../lib/dom-io.js';

document.getElementById('repeat-it').addEventListener('click', () => {
  console.log('click');

  // read user values
  let userText = readString('user-text');
  let numberOfTimes = readNumber('number-of-times');

  // repeat the string
  let result = '';
  for (let char of userText) {
    result += char.repeat(numberOfTimes);
  }

  // display the repeated string

  display("repeated-output", result);
});
