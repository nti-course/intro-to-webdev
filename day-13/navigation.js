const input = document.querySelector("input");
const button = document.querySelector("button");
const form = document.querySelector("form");

console.log(input);
console.log(input.value);

function findUser() {
  window.location.replace(`/day-13/userpage.html?username=${input.value}`);
}
button.addEventListener("click", () => {
  findUser();
});

form.addEventListener("submit", (event) => {
  event.preventDefault();
  findUser();
});
