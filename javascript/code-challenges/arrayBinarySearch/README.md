## Challenge 3: Array Binary Search

# Array Binary Search

Write a function called BinarySearch which takes in 2 parameters: a sorted array and the search key. Without utilizing any of the built-in methods available to your language, return the index of the array’s element that is equal to the search key, or -1 if the element does not exist.

<!-- Short summary or background information -->

## Challenge
<!-- Description of the challenge -->
Function needs to take in 2 parameters - one is going to be a sorted array, and a search key. Function needs to return the index of the matching search key - return -1 if not present.

## Approach & Efficiency
<!-- What approach did you take? Why? What is the Big O space/time for this approach? -->
- Create function with two parameters - (arr, key)
- Need to identify min, mid, max of array
- cut array in half and compare min, mid, max to key
- do some cool logic to figure out is the min, mid, or max is less than or greater than the key - just like figure it out or something.
- needs to compre current mid value against key 
- If key is less than mid value - cut array again
- If key is greater than mid value - cut again
- If key is equal - return index
- If key isn't found - return -1

## Solution
<!-- Embedded whiteboard image -->
[White Board](arrayBinarySearch/whiteboard03.png)

<!-- Reference help from 
https://medium.com/@pratikshya.pp19/binary-search-6d38365125b2 -->