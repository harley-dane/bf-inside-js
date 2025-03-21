// #todo

'use strict';

console.log('-- begin --');


let letters = "c";
console.assert(letters === 'c', 'Test 1');

letters = "b" + "c";
console.assert(letters === 'bc', 'Test 2');

letters = "letters" + 'd';
console.assert(letters === "lettersd", 'Test 3');

letters = 'a' + "letters";
console.assert(letters === "aletters", 'Test 4');

letters = "abc" + "de";
console.assert(letters === 'abcde', 'Test 5');

console.log('-- end --');
