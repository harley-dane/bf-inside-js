// #todo

'use strict';

/**
 * Adds two numbers together.
 *
 * @param {number} [x=0] - The left left.
 * @param {number} [y=0] - The right number.
 * @returns {number} The sum of x and y.
 */
const add = (x = 0, y = 0) => {
    return x + y;
};

describe('add function', () => {
  describe('when both arguments are provided', () => {
    it('should return the sum of the two numbers', () => {
      const expected = 5;
      const actual = add(2, 3);
      expect(actual).toEqual(expected);
    });
  });

  describe('when one argument is provided', () => {
    it('should return the sum of the provided number and 0', () => {
      const expected = 7;
      const actual = add(7);
      expect(actual).toEqual(expected);
    });
  });

  describe('when no arguments are provided', () => {
    it('should return 0', () => {
      const expected = 0;
      const actual = add();
      expect(actual).toEqual(expected);
    });
  });
});

