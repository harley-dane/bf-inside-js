import { readString, display } from '../../../../lib/dom-io.js';

document.getElementById("reverse-it").addEventListener('click', () => {
console.log("click")

  // read user text
  let userText = readString("user-text")

  let reverse = ""

  // use a for loop that counts down (i--) to reverse the input
  for (let i = -1; i < userText.length; i--){
    reverse = userText[i]
  }

  // display the reversed string

  display("reversed-output", reverse )
});
