import { products } from "./db";
import { localStorageKey } from "./navbar";

export const setBasketValue = (value) => {};

export const addProductToBasket = (id) => {
  window.basket.push(id);
  updateBasket();
};

export const updateBasket = () => {
  const offcanvasbody = document.querySelector(".offcanvas-body .col");
  offcanvasbody.innerHTML = "";
  window.basket.forEach((productId) => {
    const row = document.createElement("div");
    row.classList.add("row");
    const product = products.find((p) => p.id == productId);
    row.innerHTML = BasketItem(product.title, product.imgSrc, product.alt);
    offcanvasbody.appendChild(row);
  });

  const removeBasketItemIcons = document.querySelectorAll(
    ".offcanvas-body .card .btn-close"
  );

  removeBasketItemIcons.forEach((icon, idx) => {
    icon.addEventListener("click", () => {
      window.basket.splice(idx, 1);
      updateBasket();
    });
  });

  window.localStorage.setItem(localStorageKey, JSON.stringify(basket));
};

function BasketItem(title, imgSrc, alt) {
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
