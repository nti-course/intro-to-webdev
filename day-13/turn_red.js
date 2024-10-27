const p = document.getElementsByTagName("p")[0];
const button = document.getElementsByTagName("button")[0];

button.addEventListener("click", function () {
  p.classList.add("red");
});
