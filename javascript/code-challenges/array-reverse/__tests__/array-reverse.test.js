'use strict';

const reverse = require('../array-reverse');

describe('Array Reverse', () => {
  it ('should reverse the dang ol array', () => {
    let testArr = [1,2,3,4,5];
    let expected = [5,4,3,2,1];
    reverse(testArr);
    expected(testArr).toEqual(expected);
  });
});
