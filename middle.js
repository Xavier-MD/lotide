const assertArraysEqual = function(array1, array2) {
  if (eqArrays(array1, array2)) {
    console.log(`✅✅✅ Assertion Passed: ${array1} === ${array2}`);
  } else if (!eqArrays(array1, array2)) {
    console.log(`🛑🛑🛑 Assertion Failed: ${array1} !== ${array2}`);
  }
};

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

const middle = function(array) {
  const newArray = [];

  if (array.length <= 2) {
    return newArray;
  }

  if (array.length % 2 === 1) {
    newArray.push(array[Math.floor(array.length / 2)]);
  } else if (array.length % 2 === 0) {
    newArray.push(array[(array.length / 2) - 1]);
    newArray.push(array[(array.length / 2)]);
  }
  return newArray;
};

assertArraysEqual(middle([1, 3, 5, 7, 9]), [5]);
assertArraysEqual(middle([20, 40, 60, 80]), [40, 60]);
assertArraysEqual(middle([5, 90]), []);
assertArraysEqual(middle([4]), []);