'use strict';

/* ------------------------------------------------------------------------------------------------
CHALLENGE 1 - Review

Write a function named returnTen, takes in a string and uses split and splice to return the last 10 characters from that string as elements of an array.

------------------------------------------------------------------------------------------------ */

function returnTen(str){
  let a = str.split('');
  let b = a.slice(a.length - 10);
  return b;
}

/* ------------------------------------------------------------------------------------------------
CHALLENGE 2

Write a function named typeNum that, given an array as input, uses filter to return an array containing only the numbers.

For example, typeNum([1, 'bob' ,3]) returns [1,3].
------------------------------------------------------------------------------------------------ */

const typeNum = (arr) => {
  // Solution code here...
  return arr.filter(x => typeof x === 'number');
};

/* ------------------------------------------------------------------------------------------------
CHALLENGE 3

Write a function named containsAnd that, given an array of strings as input, uses filter to return an array containing only strings that contain 'and' within the string.

For example, containsAnd(['panda', 'ran', 'and']) returns ['panda', 'and'].
------------------------------------------------------------------------------------------------ */

const containsAnd = (arr) => {
  // Solution code here...
  return arr.filter(x => /[d]/.test(x));
};

/* ------------------------------------------------------------------------------------------------
CHALLENGE 4

Write a function named oddValues that, given an array of integers as input, uses filter to return an array containing only the odd integers.

For example, oddValues([1,2,3]) returns [1,3].
------------------------------------------------------------------------------------------------ */

const oddValues = (arr) => {
  // Solution code here...
  return arr.filter(x => x % 2);
};

/* ------------------------------------------------------------------------------------------------
CHALLENGE 5

Write a function named filterStringsWithVowels that, given an array of strings as input, uses filter to return an array with only words that contain vowels.

The callback function to filter should include or utilize a regular expression pattern.

For example, filterStringsWithVowels('gregor','hound','xyz') returns ['gregor', 'hound'].
------------------------------------------------------------------------------------------------ */


const filterStringsWithVowels = (arr) => {
  // Solution code here...
  return arr.filter(x => /[aeiou]/.test(x));
};


/* ------------------------------------------------------------------------------------------------
CHALLENGE 6

Write a function named notInFirstArray that, given two arrays as input, uses filter to return an array of all the elements in the second array that are not included in the first array.

For example, notInFirstArray([1,2,3], [1,2,3,4]) returns [4].
------------------------------------------------------------------------------------------------ */

const notInFirstArray = (forbiddenValues, arr) => {
  // Solution code here...
  let a = arr.filter(x => forbiddenValues.indexOf(x));
  console.log(a);
};

/* ------------------------------------------------------------------------------------------------
CHALLENGE 7 - Stretch Goal

Write a function named getBaseStatGreaterThan that, given the snorlaxData, below, and an integer as input, uses filter to return an array containing all stats with a baseStat greater than the integer.

For example, getBaseStatGreaterThan(snorlaxData.stats, 50) will return an array containing the 'special-defense' and 'special-attack' objects.
------------------------------------------------------------------------------------------------ */

const snorlaxData = {
  stats: [
    {
      stat: {
        url: 'https://pokeapi.co/api/v2/stat/6/',
        name: 'speed',
      },
      effort: 5,
      baseStat: 30,
    },
    {
      stat: {
        url: 'https://pokeapi.co/api/v2/stat/5/',
        name: 'special-defense',
      },
      effort: 2,
      baseStat: 110,
    },
    {
      stat: {
        url: 'https://pokeapi.co/api/v2/stat/4/',
        name: 'special-attack',
      },
      effort: 9,
      baseStat: 65,
    },
  ],
  name: 'snorlax',
  weight: 4600,
};

const getBaseStatGreaterThan = (arr, minBaseStat) => {
  // Solution code here...
};

/* ------------------------------------------------------------------------------------------------
CHALLENGE 8 - Stretch Goal

Write a function named getStatName that is an extension of your getBaseStatGreaterThan function from challenge 4. For this function, extend your solution from challenge 4 to only return the name of the stat, rather than the entire stat object.

For example, getStatName(snorlaxData.stats, 50) will return ['special-defense', 'special-attack'].
------------------------------------------------------------------------------------------------ */

const getStatName = (arr, minBaseStat) => {
  // Solution code here...
};

/* ------------------------------------------------------------------------------------------------
CHALLENGE 9 - Stretch Goal

Write a function named getCharactersWithoutChildren that, given the array of characters, below, uses filter to return an array of all characters without children.
------------------------------------------------------------------------------------------------ */

const characters = [
  {
    name: 'Eddard',
    spouse: 'Catelyn',
    children: ['Robb', 'Sansa', 'Arya', 'Bran', 'Rickon'],
    house: 'Stark',
  },
  {
    name: 'Jon',
    spouse: 'Lysa',
    children: ['Robin'],
    house: 'Arryn',
  },
  {
    name: 'Cersei',
    spouse: 'Robert',
    children: ['Joffrey', 'Myrcella', 'Tommen'],
    house: 'Lannister',
  },
  {
    name: 'Daenarys',
    spouse: 'Khal Drogo',
    children: ['Drogon', 'Rhaegal', 'Viserion'],
    house: 'Targaryen',
  },
  {
    name: 'Mace',
    spouse: 'Alerie',
    children: ['Margaery', 'Loras'],
    house: 'Tyrell',
  },
  {
    name: 'Sansa',
    spouse: 'Tyrion',
    house: 'Stark',
  },
  {
    name: 'Jon',
    spouse: null,
    house: 'Snow',
  },
];

const getCharactersWithoutChildren = (arr) => {
  // Solution code here...
};

/* ------------------------------------------------------------------------------------------------
CHALLENGE 10 - Stretch Goal

Write a function named evenOddNumericValues that, given an array as input, uses filter to remove any non-numeric values, then uses map to generate a new array containing the string 'even' or 'odd', depending on the original value.

For example: evenOddNumericValues(['Gregor', 2, 4, 1]) returns ['even', 'even', 'odd'].
------------------------------------------------------------------------------------------------ */

const evenOddNumericValues = (arr) => {
  // Solution code here...
};

/* ------------------------------------------------------------------------------------------------
TESTS

All the code below will verify that your functions are working to solve the challenges.

DO NOT CHANGE any of the below code.

Run your tests from the console: jest challenges-08.test.js

------------------------------------------------------------------------------------------------ */

describe('Testing challenge 1', () => {
  test('it should return the last 10 characters of a string as an array', () => {
    expect(returnTen('hello world')).toStrictEqual(['e','l','l','o',' ','w','o','r','l','d']);
    expect(returnTen('world')).toStrictEqual(['w','o','r','l','d']);
  });
});

describe('Testing challenge 2', () => {
  test('It should return an array containing only numbers', () => {
    expect(typeNum([1, 'bob', 3])).toStrictEqual([1, 3]);
    expect(typeNum([1, 'bob', 3]).length).toStrictEqual(2);
    expect(typeNum(['banana', 'apples', 'cherry'])).toStrictEqual([]);
    expect(typeNum([2, 3, 5])).toStrictEqual([2, 3, 5]);
  });
});

describe('Testing challenge 3', () => {
  test('It should return an array of strings containing the word and', () => {
    expect(containsAnd(['panda', 'ran', 'and'])).toStrictEqual(['panda', 'and']);
    expect(containsAnd(['banana','bob','xyz'])).toStrictEqual([]);
    expect(containsAnd([])).toStrictEqual([]);
    expect(containsAnd(['and', 'sand'])).toStrictEqual(['and', 'sand']);
  });
});

describe('Testing challenge 4', () => {
  test('It should return an array containing only odd integers', () => {
    expect(oddValues([1, 2, 3, 4, 5, 6, 7, 8, 9, 10])).toStrictEqual([1, 3, 5, 7, 9]);
    expect(oddValues([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]).length).toStrictEqual(5);
    expect(oddValues([2,3,4,179])).toStrictEqual([3,179]);
    expect(oddValues([2,4,6,8])).toStrictEqual([]);
  });
});

describe('Testing challenge 5', () => {
  test('It should return an array containing only words that have vowels', () => {
    expect(filterStringsWithVowels(['gregor','hound','xyz'])).toStrictEqual(['gregor', 'hound']);
    expect(filterStringsWithVowels(['gregor','hound','xyz']).length).toStrictEqual(2);
    expect(filterStringsWithVowels(['a', 'b', 'cdefg'])).toStrictEqual(['a', 'cdefg']);
    expect(filterStringsWithVowels(['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z', ''])).toStrictEqual(['a', 'e', 'i', 'o', 'u']);
  });

  test('It should not contain any words that do not contain vowels', () => {
    expect(filterStringsWithVowels(['gregor','hound','xyz'])).not.toContain('xyz');
  });
});

describe('Testing challenge 6', () => {
  const firstNums = [1, 2, 3];
  const secondNums = [1, 2, 3, 4];

  const firstStrings = ['Demi', 'Gregor', 'Hound'];
  const secondStrings = ['Gary', 'Charlotte', 'Demi', 'Gregor', 'Hound'];

  test('It should return an array that includes any elements not in the first array', () => {
    expect(notInFirstArray(firstNums, secondNums)).toStrictEqual([4]);
    expect(notInFirstArray(firstNums, secondNums).length).toStrictEqual(1);
  });

  test('It should also work with an array of strings', () => {
    expect(notInFirstArray(firstStrings, secondStrings)).toStrictEqual(['Gary', 'Charlotte']);
    expect(notInFirstArray(firstStrings, secondStrings).length).toStrictEqual(2);
  });

  test('It should work with empty arrays', () => {
    expect(notInFirstArray([], [])).toStrictEqual([]);
    expect(notInFirstArray([], [1,2,3,4,5])).toStrictEqual([1,2,3,4,5]);
    expect(notInFirstArray([1,2,3,4,5], [])).toStrictEqual([]);
  });
});

xdescribe('Testing challenge 7', () => {
  test('It should return an array containing the stats that are greater than the input', () => {
    expect(getBaseStatGreaterThan(snorlaxData.stats, 75)).toStrictEqual([ { stat: { url: 'https://pokeapi.co/api/v2/stat/5/', name: 'special-defense' }, effort: 2, baseStat: 110 } ]);
    expect(getBaseStatGreaterThan(snorlaxData.stats, 75).length).toStrictEqual(1);
    expect(getBaseStatGreaterThan(snorlaxData.stats, 110)).toStrictEqual([]);
  });
  test('It should work for non-Snorlax data', () => {
    expect(getBaseStatGreaterThan([{baseStat: 10}, {baseStat: -85}, {baseStat: 0}, {baseStat: -50}], -60)).toStrictEqual([{baseStat: 10}, {baseStat: 0}, {baseStat: -50}]);
  });
});

xdescribe('Testing challenge 8', () => {
  test('It should return the name of the stats that exceed that maximum', () => {
    expect(getStatName(snorlaxData.stats, 50)).toStrictEqual([ 'special-defense', 'special-attack' ]);
    expect(getStatName(snorlaxData.stats, 50).length).toStrictEqual(2);
  });

  test('It should return the name of the stats that exceed that maximum', () => {
    expect(getStatName(snorlaxData.stats, 120)).toStrictEqual([]);
    expect(getStatName(snorlaxData.stats, 120).length).toStrictEqual(0);
  });

  test('It should work for non-snorlax data', () => {
    expect(getStatName([
      {baseStat: 10, stat: {name: 'one'}},
      {baseStat: -85, stat: {name: 'two'}},
      {baseStat: 0, stat: {name: 'three'}},
      {baseStat: -50, stat: {name: 'four'}}
    ], -60)).toStrictEqual(['one', 'three', 'four']);
  });
});

xdescribe('Testing challenge 9', () => {
  test('It should return an array containing characters who do not have children', () => {
    expect(getCharactersWithoutChildren(characters)).toStrictEqual([ { name: 'Sansa', spouse: 'Tyrion', house: 'Stark' }, { name: 'Jon', spouse: null, house: 'Snow' } ]);
    expect(getCharactersWithoutChildren(characters).length).toStrictEqual(2);
  });
});

xdescribe('Testing challenge 10', () => {
  test('It should remove non-integers and return "even" or "odd', () => {
    expect(evenOddNumericValues(['Gregor', 2, 4, 1])).toStrictEqual(['even', 'even', 'odd']);
    expect(evenOddNumericValues(['Gregor', 2, 4, 1]).length).toStrictEqual(3);
    expect(evenOddNumericValues(['a', 'b', 'c'])).toStrictEqual([]);
  });
  test('It should not accept strings that look like numbers', () => {
    expect(evenOddNumericValues(['1', 2, 3, '4', 5,'6'])).toStrictEqual(['even', 'odd', 'odd']);
  });
});