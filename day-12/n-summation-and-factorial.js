// 5 -> 1, 2, 3, 4, 5 -> 15

function sumTo(n) {
  let sum = 0;
  for (let i = 1; i <= n; i++) {
    sum += i;
  }

  return sum;
}

function factorial(n) {
  // put your code here
}

console.log(sumTo(5));

console.assert(sumTo(5) === 15, "Test Case 1 Failed");
