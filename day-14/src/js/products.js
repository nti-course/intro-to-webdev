import { products } from "./db";

function Card(title, imgSrc, alt, description) {
  return `<div class="card">
            <img
              src="${imgSrc}"
              class="card-img-top img-thumbnail object-fit-contain"
              alt="${alt}"
            />
            <div class="card-body">
              <h5 class="card-title">${title}</h5>
              <p class="card-text">
              ${description}
              </p>
              <a href="#" class="btn btn-primary">Add to basket</a>
            </div>
          </div>`;
}

function basketItem(title, imgSrc, alt) {
  return `<div class="card">
            <img
              src="${imgSrc}"
              class="card-img-top img-thumbnail object-fit-contain"
              alt="${alt}"
            />
            <div class="card-body">
              <h5 class="card-title">${title}</h5>
            <button
            type="button"
            class="btn-close"
            aria-label="Close"
          ></button>
            </div>
          </div>`;
}

const row = document.querySelector(".row");
products.forEach(() => {
  const col = document.createElement("div");
  col.classList.add("col");
  row.appendChild(col);
});
const cols = document.querySelectorAll("#products .col");

cols.forEach((col, i) => {
  const product = products[i];
  col.innerHTML = Card(
    product.title,
    product.imgSrc,
    product.alt,
    product.description
  );
});

let basket = [];

const buttons = document.querySelectorAll(".card a");
buttons.forEach((button, i) => {
  button.addEventListener("click", (event) => {
    event.preventDefault();
    basket.push(i);
    updateBasket();
  });
});

function updateBasket() {
  const offcanvasbody = document.querySelector(".offcanvas-body .col");
  offcanvasbody.innerHTML = "";
  basket.forEach((productIndex) => {
    const row = document.createElement("div");
    row.classList.add("row");
    const product = products[productIndex];
    row.innerHTML = basketItem(product.title, product.imgSrc, product.alt);
    offcanvasbody.appendChild(row);
  });

  const removeBasketItemIcons = document.querySelectorAll(
    ".offcanvas-body .card .btn-close"
  );

  removeBasketItemIcons.forEach((icon, idx) => {
    console.log(icon);
    icon.addEventListener("click", () => {
      console.log(idx);
      basket.splice(idx, 1);
      updateBasket();
    });
  });
}

// empty basket

const emptyBasketButton = document.querySelector(".offcanvas-body button");
emptyBasketButton.addEventListener("click", () => {
  basket = [];
  updateBasket();
});
