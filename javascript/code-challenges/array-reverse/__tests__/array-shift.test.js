'use strict';

const insertShiftArray = require('./array-shift.js');

describe('Insert Shift Array', () => {
  test('Return array with', () => {
    let arr = [1,2,4,5];
    expect(insertShiftArray(arr,3)).toEqual([1,2,3,4,5]);
  });
})