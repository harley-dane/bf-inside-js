import { readNumber, readString, display } from '../../../../lib/dom-io.js';

document.getElementById('repeat-them').addEventListener('click', () => {
  console.log('click');

  // read user values

  const userTex = readString('user-text');
  const numberOfTimes = readNumber('number-of-times');

  // repeat the characters in the text
  let result = '';
  for (let char of userTex) {
    result += char.repeat(numberOfTimes);
  }

  // display the text with repeated characters

  display('repeated-output', result);
});
