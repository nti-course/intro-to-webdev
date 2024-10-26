function minmax(arr) {
  //  solution 1
  //   const sortedArr = arr.sort();
  //   const min = sortedArr.shift();
  //   const max = sortedArr.pop();
  //   return [min, max];
  //   solution 2
  return [Math.min(...arr), Math.max(...arr)];
  // solution 2 is more idiomatic than solution
}

console.log(minmax([1, 2, 3, 4, 500]));
console.log(minmax([-1, 2, 5, 3, 4]));

console.log(Math.min(...[1, 2, 3, 4, 500]));
