'use strict';

const binarySearch = require('./array_binary_search.js');

describe('Challenge 03 - Array Binary Search', () => {
    test ('Write a function called BinarySearch which takes in 2 parameters: a sorted array and the search key. Without utilizing any of the built-in methods available to your language, return the index of the array’s element that is equal to the search key, or -1 if the element does not exist.');
    let arr = [1,2,3,4,5,6,7,8,9];
        expect(binarySearch(arr, 3)).toEqual(2);
});