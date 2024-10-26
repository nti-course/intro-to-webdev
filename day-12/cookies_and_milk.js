/**
 *
 * @param {Date} date
 */
function isTimeForCookiesAndMilk(date) {
  const month = date.getMonth() + 1;
  const day = date.getDate();

  return month === 12 && day === 24;
}

// day = 24 -> true
// '24' == 24 -> true
// '24' === 24 -> false

console.log(isTimeForCookiesAndMilk(new Date("2022/12/24")));
console.log(isTimeForCookiesAndMilk(new Date("2022/11/24")));
console.log(isTimeForCookiesAndMilk(new Date("2019/12/24")));
console.log(isTimeForCookiesAndMilk(new Date("2019/12/16")));
