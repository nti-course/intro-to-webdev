/**
 * Write a function to concatenate all elements in an array in reverse order.
 * for example ['ab', 'cd', 'ef'] => 'badcfe'
 * @param {Array<string>} arr
 */
function concatenateElementsInReverse(arr) {
  // write your code here
  return arr.map((element) => element.split("").reverse().join()).join("");
}

console.log("ab".split(""));
console.log([1, 2].reverse());
console.log(["a", "b"].join(""));
console.log(concatenateElementsInReverse(["ab", "cd", "ef"]));

console.assert(
  concatenateElementsInReverse(["ab", "cd", "ef"]) === "badcfe",
  "Test Case 1 Failed"
);

/**
 * Your input will be an array of strings.
 * You need to find the return only strings with numerical value less than 10.
 * @param {Array<string>} arr
 */
function removeNumberGreaterThan10(arr) {
  return arr
    .map((element) => parseInt(element))
    .filter((element) => element < 10);
}

console.log(removeNumberGreaterThan10(["1", "2", "3", "10", "11"]));

const arr = ["1", "2", "14", "10"];
console.log(typeof arr[0]);
console.log(typeof parseInt(arr[0]));
const numArray = arr.map((element) => parseInt(element));
console.log(numArray);
console.log(typeof numArray[0]);
console.log(numArray.filter((element) => element < 10));
console.assert(
  JSON.stringify(removeNumberGreaterThan10(["1", "2", "3", "10", "11"])) ===
    JSON.stringify(["1", "2", "3"]),
  "Test Case 2 Failed"
);
