const assert = require('chai').assert;
const middle = require('../middle');

describe("#middle", () => {
  it("returns [5] for [1, 3, 5, 7, 9]", () => {
    assert.deepEqual(middle([1, 3, 5, 7, 9]), [5]);
  });
  it("returns [40, 60] for [20, 40, 60, 80]", () => {
    assert.deepEqual(middle([20, 40, 60, 80]), [40, 60]);
  });
  it("returns [] for [5, 90]", () => {
    assert.deepEqual(middle([5, 90]), []);
  });
  it("returns [] for [4]", () => {
    assert.deepEqual(middle([4]), []);
  });
});