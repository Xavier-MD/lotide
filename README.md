# Lotide

A mini clone of the [Lodash](https://lodash.com) library.

## Purpose

**_BEWARE:_ This library was published for learning purposes. It is _not_ intended for use in production-grade software.**

This project was created and published by me as part of my learnings at Lighthouse Labs. 

## Usage

**Install it:**

`npm install @Xavier-MD/lotide`

**Require it:**

`const _ = require('@Xavier-MD/lotide');`

**Call it:**

`const results = _.tail([1, 2, 3]) // => [2, 3]`

## Documentation

The following functions are currently implemented:



`assertArraysEqual(actual, expected)`: Asserts whether two arrays contain strictly equal values at equivalent indices.

`assertEqual(actual, expected)`: Asserts whether an actual value is strictly equal to an expected value.

`assertObjectsEqual(actual, expected)`: Asserts whether the contents of two objects are strictly equal.

`countLetters(letters)`: Returns an object that contains a counter for each character in a string.

`countOnly(allItems, itemsToCount)`: Returns counts for a specific subset of items in an object.

`eqArrays(array1, array2)`: Returns a boolean that indicates whether two arrays contain strictly equal values.

`eqObjects(object1, object2)`: Returns a boolean that indicates whether two objects contain strictly equal values.

`findKey(object, callback)`: Finds a key that adheres to a given callback value.

`findKeyByValue(object, value)`: Finds a key by searching for its value.

`head(array)`: Returns the first value of an array.

`letterPositions(sentence)`: Returns the index of each letter from a given string in the form of an object, where each letter is a key and its value is the number of occurences.

`map(array, callback)`: Iterates over every value of an array and returns a new array of changed values according to a given callback function.

`middle(array)`: Returns the median of an array. Will return two values if the array's length is even.

`tail(array)`: Returns everything in an array except for the first value.

`takeUntil(array, callback)`: Pushes the values of a given array into a new array until a specified value is reached using a callback that functions as a condition. It then returns the new array.

`without(source, itemsToRemove)`: Removes a specified item from a source array.