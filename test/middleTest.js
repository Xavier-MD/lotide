const assertArraysEqual = require('../assertArraysEqual');
const middle = require('../middle');


assertArraysEqual(middle([1, 3, 5, 7, 9]), [5]);
assertArraysEqual(middle([20, 40, 60, 80]), [40, 60]);
assertArraysEqual(middle([5, 90]), []);
assertArraysEqual(middle([4]), []);