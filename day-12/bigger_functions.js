function f1() {
  return 30;
}
function f2() {
  return 10;
}
function f3() {
  return -1;
}

function f4() {
  return 20;
}

function g1() {
  return 20;
}
function g2() {
  return 100;
}
function g3() {
  return 2;
}
function g4() {
  return 0;
}

/**
 * Return which function has a bigger return value.
 * @param {Function} f
 * @param {Function} g
 */
function bigger(f, g) {
  if (f() > g()) {
    return "f";
  } else if (f() < g()) {
    return "g";
  } else {
    return "equal";
  }
}

console.log(bigger(f1, g1)); // f1
console.log(bigger(f2, g2)); // f1
console.log(bigger(f2, g2)); // f1
console.log(bigger(f3, g4)); // f1
