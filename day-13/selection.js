// css: #
const myHeading = document.getElementById("main-title");
const items = document.getElementById("items");

console.log({ myHeading, items });

// css: p, div, h1
const listItems = document.getElementsByTagName("li");
const firstListItem = listItems[0];
const firstListItemParent = firstListItem.parentElement;
console.log({ listItems });
console.log({ firstListItem });
console.log({ firstListItemParent });

const paragraphs = document.getElementsByTagName("p");
console.log({ paragraphs });

// css: .className
const links = document.getElementsByClassName("link");
console.log({ links });
console.log({ lastLink: Array.from(links).at(-1) });

// If you want to select like css
const items2 = document.querySelector(".item");
const allItems2 = document.querySelectorAll(".item");
console.log({ items2, allItems2 });

const firstListItem2 = document.querySelector(".container ul li:first-of-type");
firstListItem2.setAttribute("style", "color: red");
console.log({ firstListItem2 });

const button = document.querySelector("button");
console.log({ button });

button.setAttribute("disabled", true);

const firstDiv = document.querySelector("div.text");
const firstDivChildren = firstDiv.children;
console.log({ firstDiv, firstDivChildren });

const firstParagraph = firstDivChildren[0];
console.log(firstParagraph.nextElementSibling);
console.log(firstParagraph.previousElementSibling);

console.log(document.querySelector('[for="checkbox1"]'));

const button2 = document.querySelector("button.special");
button2.addEventListener("click", function () {
  //   alert("clicked");
  console.log("clicked");
});
