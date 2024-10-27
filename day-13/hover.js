const button = document.querySelector("button");
button.addEventListener("mouseenter", function () {
  this.classList.add("hovered");
});

button.addEventListener("mouseleave", function () {
  this.classList.remove("hovered");
});

const img = document.querySelector("img");
img.addEventListener("mouseenter", () => {
  img.classList.add("zoom");
});

img.addEventListener("mouseleave", () => {
  img.classList.remove("zoom");
});
