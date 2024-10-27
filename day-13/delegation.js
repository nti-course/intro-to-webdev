const listItems = document.querySelectorAll("li");
// listItems[0].addEventListener("click", function () {
//   this.classList.toggle("deleted");
// });
// listItems[1].addEventListener("click", function () {
//   this.classList.toggle("deleted");
// });
// listItems[2].addEventListener("click", function () {
//   this.classList.toggle("deleted");
// });
// listItems[3].addEventListener("click", function () {
//   this.classList.toggle("deleted");
// });

// listItems[4].addEventListener("click", function () {
//   this.classList.toggle("deleted");
// });

// listItems.forEach((li, index) => {
//   console.log(index);
//   li.addEventListener("click", function () {
//     this.classList.toggle("deleted");
//   });
// });

// event delegation
const ul = document.querySelector("ul");
ul.addEventListener("click", (event) => {
  event.target.classList.toggle("deleted");
});

ul.addEventListener("dblclick", (event) => {
  event.target.classList.add("hidden");
});

const button = document.querySelector("button");
button.addEventListener("click", () => {
  document.querySelectorAll("li").forEach((li) => {
    li.classList.remove("deleted");
    li.classList.remove("hidden");
  });
});
