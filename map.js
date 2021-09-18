const words = ["ground", "control", "to", "major", "tom"];

const map = function(array, callback) {
  const results = [];
  for (let item of array) {
    results.push(callback(item));
  }
  return results;
};

const results1 = map(words, word => word[0]);
console.log(results1);

const eqArrays = function(array1, array2) {
  if (array1.length >= array2.length) {
    for (let i = 0; i < array1.length; i++) {
      if (array1[i] !== array2[i]) {
        return false;
      }
    }
    return true;
  } else if (array1.length < array2.length) {
    for (let i = 0; i < array2.length; i++) {
      if (array1[i] !== array2[i]) {
        return false;
      }
    }
    return true;
  }
};

const assertArraysEqual = function(actual, expected) {
  if (eqArrays(actual, expected)) {
    console.log(`✅✅✅ Assertion Passed: ${actual} === ${expected}`);
  } else if (!eqArrays(actual, expected)) {
    console.log(`🛑🛑🛑 Assertion Failed: ${actual} !== ${expected}`);
  }
};

assertArraysEqual(map(['Hello', 'hi', 'Bonjour'], thing => thing[0]), ['H', 'h', 'B']);
assertArraysEqual(map(['Hello', 'hi', 'Bonjour'], thing => thing[1]), ['e', 'i', 'o']);
assertArraysEqual(map(['Hello', 'hi', 'Bonjour'], thing => thing.length), [5, 2, 7]);