'use strict';


/**
 * Repeats a given text a specified number of times.
 *
 * @param {string} [text=''] - The text to repeat.
 * @param {number} [repeats=1] - The number of times to repeat the text.
 * @returns {string} The repeated text.
 */
const repeatText = (text = '', repeats = 1) => {
  if (repeats < 1) {
    return '';
  }
  return text.repeat(repeats);
};

// Test code
describe('repeatText', () => {
  it('repeats the text the specified number of times', () => {
    const result = repeatText('abc', 3);
    const expected = 'abcabcabc';
    expect(result).toEqual(expected);
  });

  it('returns an empty string if repeats is less than 1', () => {
    const result = repeatText('abc', 0);
    const expected = '';
    expect(result).toEqual(expected);
  });

  it('returns the original text if repeats is 1', () => {
    const result = repeatText('abc', 1);
    const expected = 'abc';
    expect(result).toEqual(expected);
  });

  it('returns an empty string if text is empty', () => {
    const result = repeatText('', 5);
    const expected = '';
    expect(result).toEqual(expected);
  });

  it('returns an empty string if text is empty and repeats is 0', () => {
    const result = repeatText('', 0);
    const expected = '';
    expect(result).toEqual(expected);
  });
});
