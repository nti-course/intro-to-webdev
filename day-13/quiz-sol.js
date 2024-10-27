/**
 *
 * @param {Array<number>} change
 * @param {number} amountRequired
 * @returns {boolean}
 */
function changeEnough(change, amountRequired) {
  const [quarter, dime, nickel, penny] = change;
  let total = (25 * quarter + 10 * dime + 5 * nickel + penny) / 100;
  return total >= amountRequired;
}

console.log(changeEnough([2, 100, 0, 0], 14.11));
console.log(changeEnough([0, 0, 20, 5], 0.75));
console.log(changeEnough([30, 40, 20, 5], 12.55));
console.log(changeEnough([10, 0, 0, 50], 3.85));
console.log(changeEnough([1, 0, 5, 219], 19.99));
console.log(changeEnough([0, 0, 4, 10], 0.3));

// we don't use floats with money because of floating point errors
console.log(0.2333333 + 0.13);
