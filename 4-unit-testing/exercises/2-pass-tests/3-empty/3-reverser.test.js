// #todo

'use strict';

/**
 * Reverses a given string.
 *
 * @param {string} [text=''] - The string to reverse.
 * @returns {string} The reversed string.
 */
const reverser = (text = '') => {
  return text.split('').reverse().join('');
};

// Test code
describe('reverser: reverses a string', () => {
  it('reverses one letter', () => {
    const returned = reverser('a');
    expect(returned).toEqual('a');
  });
  it('reverses the empty string', () => {
    const returned = reverser('');
    expect(returned).toEqual('');
  });
  it('reverses words with punctuation', () => {
    const returned = reverser('hoy!');
    expect(returned).toEqual('!yoh');
  });
  it('reverses long strings', () => {
    const returned = reverser('!! How is LOUD ??');
    expect(returned).toEqual('?? DUOL si woH !!');
  });
  it('reverses one letter', () => {
    const returned = reverser('a');
    expect(returned).toEqual('a');
  });
  it('has a default parameter', () => {
    const returned = reverser();
    expect(returned).toEqual('');
  });
});
