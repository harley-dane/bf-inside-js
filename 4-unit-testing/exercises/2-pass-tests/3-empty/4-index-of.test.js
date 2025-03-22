'use strict';

/**
 * Searches for a specific character in a string.
 * If the character exists, it returns the index.
 * Otherwise, it returns -1.
 *
 * @param {string} [toSearch=''] - The text to search.
 * @param {string} [toFind=''] - The character to search for.
 * If toFind is not 1 character, the search returns -1.
 * @returns {number} The index of the found character or -1.
 */
const searchCharacter = (toSearch = '', toFind = '') => {
  if (toFind.length !== 1) {
    return -1;
  }
  return toSearch.indexOf(toFind);
};

// Test code
describe('searchCharacter: searches for a specific character in a string', () => {
  it('returns the index of the character if found', () => {
    const returned = searchCharacter('hello', 'e');
    expect(returned).toEqual(1);
  });
  it('returns -1 if the character is not found', () => {
    const returned = searchCharacter('hello', 'x');
    expect(returned).toEqual(-1);
  });
  it('returns -1 if toFind is not 1 character', () => {
    const returned = searchCharacter('hello', 'he');
    expect(returned).toEqual(-1);
  });
  it('returns -1 if toFind is an empty string', () => {
    const returned = searchCharacter('hello', '');
    expect(returned).toEqual(-1);
  });
  it('returns the index of the first occurrence of the character', () => {
    const returned = searchCharacter('hello', 'l');
    expect(returned).toEqual(2);
  });
  it('returns -1 if toSearch is an empty string', () => {
    const returned = searchCharacter('', 'a');
    expect(returned).toEqual(-1);
  });
});
