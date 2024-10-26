/**
 - error(1) ➞ "Check the fan: e1"

 - error(2) ➞ "Emergency stop: e2"

- error(3) ➞ "Pump Error: e3"
 * @param {*} number 
 */
function error(number) {
  const errorMsgs = [
    "Check the fan: e1",
    "Emergency stop: e2",
    "Pump Error: e3",
  ];

  return errorMsgs[number - 1];
}

console.log(error(1));
console.log(error(2));
console.log(error(3));

function error2(number) {
  const errorMsgs = {
    1: "Check the fan: e1",
    2: "Emergency stop: e2",
    3: "Pump Error: e3",
  };

  return errorMsgs[number];
}

console.log(error2(1));
console.log(error2(2));
console.log(error2(3));

// ternary operator

let x = 0;
const y = 1;

if (y > 10) {
  x = 1;
} else {
  x = 0;
}

console.log(x);

let z = y > 10 ? 1 : 0;

console.log(z);
