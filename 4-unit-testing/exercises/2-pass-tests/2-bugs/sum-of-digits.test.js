'use strict';

const sumOfDigits = (toSum = 0) => {
  const digitsToSum = String(toSum).replaceAll('.', '').replaceAll('-', '');
  let sum = 0;
  for (const character of digitsToSum) {
    const digit = Number(character);
    if (!Number.isNaN(digit)) {
      sum += digit;
    }
  }

  return toSum < 0 ? -sum : sum;
};

describe('sumOfDigits: sums the digits in a number', () => {
  describe('how it sums the digits', () => {
    it('each digit in the number is summed as a separate number', () => {
      const actual = sumOfDigits(123);
      expect(actual).toEqual(6);
    });
    it('single-digit numbers are not changed', () => {
      const actual = sumOfDigits(4);
      expect(actual).toEqual(4);
    });
    it('the point in decimals is ignored', () => {
      const actual = sumOfDigits(1.5);
      expect(actual).toEqual(6);
    });
    it('negative numbers return negative values', () => {
      const actual = sumOfDigits(-11);
      expect(actual).toEqual(-2);
    });
    it('zero is zero', () => {
      const actual = sumOfDigits(0);
      expect(actual).toEqual(0);
    });
    it('zeros are ignored', () => {
      const actual = sumOfDigits(100000);
      expect(actual).toEqual(1);
    });
    it('does all of these things at once', () => {
      const actual = sumOfDigits(-50.5);
      expect(actual).toEqual(-10);
    });
  });
  describe('default parameters', () => {
    it('has a default parameter 0', () => {
      const actual = sumOfDigits();
      expect(actual).toEqual(0);
    });
  });
});
