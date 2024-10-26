// f(x) = 2x + 4

function f(x, y) {
  console.log(typeof y);
  console.log("before the return");
  return 2 * x + 4 - y;
  console.log("after the return");
  return undefined;
}

console.log(f(5, 2));
console.log(f(6, 1));

const attendees = ["ali", "ahmed", "hassan"];

function isAttending(name) {
  if (attendees.indexOf(name) === -1) {
    return false;
  }
  return true;
}

console.log(isAttending(attendees, 1));
console.log(isAttending(attendees, "zaid"));

console.log(getDaysUntilMonth(22));
console.log(getDaysUntilMonth(30));

function getDaysUntilMonth(day) {
  const today = new Date().getDate();
  return Math.abs(today - day);
}

// function multiply(a, b) {
//   console.log(multiply(2, 3));
//   return a * b;
// }

let multiply = (a, b) => {
  return a * b;
};

console.log("hello");

// console.log(myFunction(2, 3));
const myFunction = function (a, b) {
  return a + b;
};
console.log(myFunction(2, 3));

const today = new Date().getDay();
// const today = 10;
console.log(today);
switch (today) {
  case 0:
    console.log("Sunday");
    break;
  case 1:
    console.log("Monday");
    break;
  case 2:
    console.log("Tuesday");
    break;
  case 3:
    console.log("Wednesday");
    break;
  case 4:
    console.log("Thursday");
    break;
  case 5:
    console.log("Friday");
    break;
  case 6:
    console.log("Saturday");
    break;
  default:
    console.log("Invalid day");
    break;
}

// for
// while
// do while

let i = 1;
// increment
console.log(i++);
console.log(i);
console.log(++i);
console.log(i);
// decrement
console.log(i--);
console.log(i);
console.log(--i);
console.log(i);

for (let j = 0; j < 11; j += 1) {
  console.log(j);
}

let studentName = "ali";
let index = 10;

while (index < studentName.length) {
  console.log("executed");
  console.log(studentName.charAt(index));
  index++;
}

for (let i = 0; i < studentName.length; i++) {
  console.log(studentName.charAt(i));
}
index = 10;
do {
  console.log("executed");
  console.log(studentName.charAt(index));
  index++;
} while (index < studentName.length);

const arr = ["ali", "ahmed", "hassan", "ahemd"];
arr.push("zain");
console.log(arr);
// you can't reassign a const variable (put it on the left of the = sign)
// arr = []

for (let i = 0; i < arr.length; i++) {
  for (let j = 0; j < arr[i].length; j++) {
    console.log(arr[i].charAt(j));
  }
  //   console.log(arr[i]);
}

function includes(arr, value) {
  for (let i = 0; i < arr.length; i++) {
    if (value === arr[i]) {
      return true;
    }
  }
  return false;
}

console.log(includes(arr, "ali"));
console.log(includes(arr, "zaid"));

function indexOf(array, value) {
  for (let i = 0; i < array.length; i++) {
    if (value === array[i]) {
      return i;
    }
  }
  return -1;
}

console.log(indexOf(arr, "ahmed"));
console.log(indexOf(arr, "zaid"));
console.log(arr.indexOf("ahmed"));
console.log(arr.indexOf("zaid"));

const attr = "custom attr";
console.log(`(${attr})`);

const arr2 = [1, 2, 3, 4];

const res1 = arr2.map((element, index) => {
  return `${index}. ${element * 2}`;
});
console.log(res1);

const res2 = arr.forEach((element, index) => {
  console.log(`${index}. ${element}`);
});

console.log(res2);

const bools = [true, true, true, true, false];

console.log(Boolean(1));
console.log(Boolean(0));

console.log(bools.some(Boolean));
console.log(bools.every(Boolean));

const ages = [20, 30, 15, 20, 22];
console.log(ages.some((age) => age < 18));
console.log(ages.some((age) => age > 30));
console.log(
  ages.some((age) => {
    return age < 18;
  })
);

const attendees2 = [
  // first class
  ["ali", "ahmed", "hassan"],
  // second class
  ["zaid", "khalid", "noman"],
];

console.log(
  attendees2.flatMap((element, index) => {
    return element;
  })
);

console.log(ages.filter((age) => age > 18));
// && and
// || or
// ! not

const nums = [1, 2, 3, 4, 5];

console.log(
  nums.reduce((acc, curr) => {
    console.log(curr);
    return acc + curr;
  })
);

console.log(
  nums.reduceRight((acc, curr) => {
    console.log(curr);
    return acc + curr;
  })
);

const gogoleUrl = new URL(
  "https://www.google.com:433/search?q=javascript+array+methods#hi"
);

console.log(gogoleUrl.origin);
console.log(gogoleUrl.host);
console.log(gogoleUrl.hostname);
console.log(gogoleUrl.pathname);
console.log(gogoleUrl.searchParams);

const invalidURl = "http//google";

try {
  new URL(invalidURl);
  console.log("valid url");
} catch (error) {
  console.log(error.message);
}

// deduplication
const set1 = new Set([1, 2, 3, 4, 5, 5, 5, 5, 5, 5]);
console.log(set1);

const attendees3 = ["ali", "omar", "ahmed", "ali"];
console.log(new Set(attendees3));

console.log(Array.from(set1));

set1.add(6);
console.log(Array.from(set1));

set1.delete(2);
console.log(Array.from(set1));

set1.clear();
console.log(Array.from(set1));

const student1FirstName = "ali";
const student1LastName = "ahmed";
const student1Age = 20;
const student1Subjects = ["math", "english", "science"];

const student1 = {
  firstName: "ali",
  lastName: "ahmed",
  age: 20,
  subjects: ["math", "english", "science"],
};

console.log(student1.firstName);
console.log(student1.lastName);
console.log(student1.age);
console.log(student1.subjects);
const nums3 = [2, 3, 4, 5, 1];

console.log(
  nums3.sort((a, b) => {
    return b - a;
  })
);

const student = [
  {
    firstName: "ali",
    lastName: "ahmed",
    age: 20,
    subjects: ["math", "english", "science"],
  },
  {
    firstName: "ahmed",
    lastName: "ali",
    age: 19,
    subjects: ["math", "english", "science"],
  },
  {
    firstName: "hassan",
    lastName: "ali",
    age: 21,
    subjects: ["math", "english", "science"],
  },
];

const sortByAge = (studentsArray) =>
  studentsArray.sort((a, b) => b.age - a.age);

console.log(sortByAge(student));

const map = new Map([
  [["firstname", "nickname"], "ali"],
  ["lastName", "ahmed"],
]);
console.log(map);

// invalid: object keys must be strings or symbols
// const obj = {
//     ["firstname", "nickname"]: 'ali',
// }

const sym1 = Symbol("a");
const sym2 = Symbol("a");
const sym3 = Symbol("c");

console.log(sym1 === sym1);
console.log(sym1 === sym2);
console.log(sym1 === sym3);

const num1 = Number(1);
const num2 = Number(1);
const num3 = 2;

console.log(num1 == num1);
console.log(num1 == num2);
console.log(num1 === num3);

