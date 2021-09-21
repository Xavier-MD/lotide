
const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`✅✅✅ Assertion Passed: ${actual} === ${expected}`);
  } else if (actual !== expected) {
    console.log(`🛑🛑🛑 Assertion Failed: ${actual} !== ${expected}`);
  }
};

const countLetters = function(letters) {
  let counted = {};

  for (let letter of letters) {
    if (counted[letter]) {
      counted[letter] += 1;
    } else if (letter && letter !== ' ') {
      counted[letter] = 1;
    }
  }
  return counted;
};

console.log(countLetters('lighthouse in the house'));
console.log(countLetters('hahahaha hahaha haha ha'));

module.exports = countLetters;