// variable names:
// invalid names
// let 1st_name
// !@#$%^^*
// first name
// let const =
// valid names
let first_name = ""; // kabab case
// firstName = ""; // camel case
let myBlackCarHas = "engine";
// MyBlackCarHas = "engine"; // pascal case
// FirstName = ""; // pascal case

const s1 = "s1";
const s2 = "s2";
// string concatenation ("s1 s2")
console.log(s1 + " " + s2); // s1s2

// Any object has 3 attributes
// 1. property
// 2. method
// 3. events

const s3 = "my name is ali";
// indexing
//  getting the first character
console.log(s3.charAt(0)); // m
// getting the string length
console.log(s3.length); // 14
// getting the last character
console.log(s3.charAt(s3.length - 1)); // i
// Generating intials from names
// first name: ali
// last name: mohamed
// AM

const firstName = "ali";
const lastName = "mohamed";
console.log(
  "My initials are: ",
  (firstName.charAt(0) + lastName.charAt(0)).toUpperCase()
); // AM

// concatenation via method
let s4 = "hello";
let s5 = "world";
// console.log(s4 + s5)
console.log(s4.concat(s5)); // hello world

let myFile = "img.jpeg";
console.log(myFile.endsWith(".png")); // true

let url = "http://www.google.com";
console.log(url.startsWith("https")); // true

console.log(url.includes("google")); // true
console.log(url.includes("Google")); // false
console.log(url.includes("YouTube")); // false

console.log(myFile.indexOf("."));
// counting in reverse
console.log(myFile.indexOf(".") - myFile.length);

console.log(s4.lastIndexOf("l"));
console.log(s4.indexOf("l"));

console.log(s1.padStart(10, "0")); // 00000000s1
console.log(s2.padStart(10, "0")); // 00000000s1
console.log("12345".padStart(10, " ")); // 00000000s1
console.log("1.png".padStart(7, "0")); // 0001.png
console.log("100.png".padStart(7, "0")); // 0001.png

let label1 = "first name: ";
let label2 = "last name: ";
console.log(label1, "ali");
console.log(label2.padEnd(label1.length, " "), "ahmed");
console.log(label2, "ahmed");

console.log("-".repeat(50));

console.log("original url: ", url);
console.log(url.replace("http", "https"));

let anotherUrl = "http://www.google.com?q=how-http-works";
console.log("original url: ", anotherUrl);
console.log(anotherUrl.replace("http", "https"));
console.log(anotherUrl.replaceAll("http", "https"));
//
let str = "hello world";
let slicedStr = str.slice(5);
console.log(str);
console.log(slicedStr);

console.log(str.slice(1, 5));

let url2 = "https://www.google.com/page/nested-page/more-nested-page";
console.log(url2.split("/"));
console.log("hello world".split(" "));
console.log("hello world".split(""));

let emailWithExtraSpace = "      abdoghanem160@gmail.com    ";
console.log(emailWithExtraSpace);
console.log(emailWithExtraSpace.trim());
let validEmail = emailWithExtraSpace.trim();
let domain = "gmail.com";

console.log(validEmail.substring(0, validEmail.length - domain.length - 1));
console.log(validEmail.substring(0, validEmail.indexOf("@")));

// numbers
let num1 = 10;
let num2 = 20;
console.log(num1 + num2);
console.log(num1 - num2);
console.log(num1 * num2);
console.log(num1 / num2);
console.log(num1 ^ 2);

// user age "20"
let userAge = "20";
// next year age

console.log(userAge + 1); // 201
console.log(Number.parseInt(userAge, 10) + 3); // 21

console.log(typeof userAge);
console.log(typeof Number.parseInt(userAge, 10));
let fraction = 1 / 3;
console.log(typeof fraction);
console.log(Number.isInteger(fraction));
console.log(fraction + fraction + 0.1 + fraction);
// to nearest integer
console.log(Math.round(fraction + fraction + 0.1 + fraction));
// to nearest decimal
console.log((fraction + fraction + 0.1 + fraction).toFixed(3));

// NaN => Not a Number
console.log(parseInt("3", 10));
console.log(parseInt("ali"));
console.log(typeof NaN);

console.log(Number.isNaN(parseInt("ali")));
console.log(Number.isNaN(parseInt("2")));

console.log(Number.MAX_SAFE_INTEGER);

console.log();
let bigX = BigInt("0x1");
console.log(bigX);
console.log(typeof bigX);
console.log(typeof 1n);

// boolean
console.log(true);
console.log(false);
console.log(typeof true);

console.log(Boolean(0));
console.log(Boolean(1));
console.log(Boolean(-1));
console.log(Boolean(NaN));
console.log(Boolean(undefined));
console.log(Boolean(null));

console.log(Boolean("Ali"));
console.log(Boolean("false"));
console.log(Boolean("true"));
console.log(Boolean(""));
console.log(Boolean("   "));

console.log(19 > 20);
console.log(19 < 20);
console.log(19 <= 20);
console.log(19 >= 20);
console.log(20 >= 20);
console.log(20 == 20);

console.log("ali" == "ali");

console.log("" == undefined);
console.log("" == null);

let a = 20;
let b = 20;
let c = false;

if (a > b && c) {
  console.log("a > b");
}

if (a > b) {
  console.log("a > b");
}

if (a == b || c) {
  console.log("a == b");
}

if (a < b) {
  console.log("a < b");
}

let yearOfBirth = "2000";

// strict equality
console.log(20 == "20");
console.log(20 === "20");

let arr1 = [1, 2, 3, 4, 5];
let arr2 = [6, 7, 8, 9, 10];
console.log(arr1.length);
console.log(arr1.concat(arr2));
console.log(arr1[1]);
console.log(arr1.at(-1));
console.log(arr1.indexOf(7));

const attendees = ["ali", "omar", "ahmed"];
const check = "ali";

if (attendees.indexOf(check) == -1) {
  console.log(check, " is not attending");
} else {
  console.log(check, " is attending");
}

arr1.push(6);
console.log(arr1);

arr1.unshift(20);
console.log(arr1);

arr1.pop();
console.log(arr1);
arr1.shift();
console.log(arr1);

arr1.reverse();
console.log(arr1);

console.log(url2);
let arrParts = url2.split("/");
console.log(arrParts);
console.log(arrParts.join("/"));

let arr3 = [8, 4, 1, 0, 0, 5];
console.log(arr3.sort());

let d = new Date();
console.log(d);
let d2 = new Date("2000-01-02");
console.log(d2);
console.log(Intl.DateTimeFormat("ar-EG").format(d2));
console.log(d2.getFullYear());
console.log(d.getMonth());
console.log(d.getDay());

console.log(d.getFullYear() > d2.getFullYear());

console.log(Date.now());

let ms = Date.now();
console.log(Intl.DateTimeFormat("ar-EG").format(new Date(ms)));
