// !don't do this, use URL object instead
// console.log(document.URL.split("=").at(-1));
// console.log(document.URL);

// ---------------------------------- //
// Do this instead
// 127.0.0.1:3000/day-13/userpage.html?name=hossam
// try this: 127.0.0.1:3000/day-13/userpage.html
const url = new URL(document.URL);
const name = url.searchParams.get("name");
console.log(name);
const h1 = document.querySelector("h1");
if (name) {
  h1.textContent = `your name is ${name}`;
} else {
  h1.textContent = "I don't know you 🤷";
}
