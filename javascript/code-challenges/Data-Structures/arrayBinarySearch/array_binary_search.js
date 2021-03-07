'use strict';

function binarySearch(arr, key){
    let start = 0;
    let end = arr.length -1;
    let mid = Math.floor((start + end)/2);
    while (start <= end){
        if(arr[mid] === key) return mid;
        else if (arr[mid] < key) start = mid +1;
        else end = mid -1;
    };
    return -1;
};

// console.log(binarySearch([1,2,3,4,5,6,7,8,9],3));
