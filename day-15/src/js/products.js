import { addProductToBasket } from "./addProductToBasket";
import { Basket } from "./basket";
import { products } from "./db";
import { initBasket, initSearch, NavBar, localStorageKey } from "./navbar";
import { updateBasket } from "./addProductToBasket";

function Card({ title, imgSrc, alt, description, price, id }) {
  return `<a href="/product.html?title=${encodeURIComponent(
    title
  )}" class="text-reset text-decoration-none product-wrapper">
            <div class="col">
              <div class="card h-100" title="${title}" data-product-id="${id}"">
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

                    <div class="card-footer">
                      <span class="text-body-secondary">$${price}</span>
                      <a href="#" class="btn btn-primary"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-cart-plus" viewBox="0 0 16 16">
    <path d="M9 5.5a.5.5 0 0 0-1 0V7H6.5a.5.5 0 0 0 0 1H8v1.5a.5.5 0 0 0 1 0V8h1.5a.5.5 0 0 0 0-1H9z"/>
    <path d="M.5 1a.5.5 0 0 0 0 1h1.11l.401 1.607 1.498 7.985A.5.5 0 0 0 4 12h1a2 2 0 1 0 0 4 2 2 0 0 0 0-4h7a2 2 0 1 0 0 4 2 2 0 0 0 0-4h1a.5.5 0 0 0 .491-.408l1.5-8A.5.5 0 0 0 14.5 3H2.89l-.405-1.621A.5.5 0 0 0 2 1zm3.915 10L3.102 4h10.796l-1.313 7zM6 14a1 1 0 1 1-2 0 1 1 0 0 1 2 0m7 0a1 1 0 1 1-2 0 1 1 0 0 1 2 0"/>
  </svg></a>
                    </div>
                  </div>
                </div>
            </div>
          </a>`;
}

function render(products) {
  const navbarWrapper = document.createElement("div");
  navbarWrapper.innerHTML = NavBar();
  document.querySelector(".products-container").before(navbarWrapper);

  const basketWrapper = document.createElement("div");
  basketWrapper.innerHTML = Basket();
  document.body.appendChild(basketWrapper);
  renderCards(products);
}

function renderCards(products) {
  const row = document.querySelector(".products-container .row");
  row.innerHTML = "";
  products.forEach(() => {
    const col = document.createElement("div");
    col.classList.add("col");
    row.appendChild(col);
  });

  const cols = document.querySelectorAll("#products .col");

  cols.forEach((col, i) => {
    const product = products[i];
    col.innerHTML = Card(product);
  });

  const buttons = document.querySelectorAll(".card .card-footer a");
  buttons.forEach((button, i) => {
    button.addEventListener("click", (event) => {
      const productId = button.closest(".card").getAttribute("data-product-id");
      event.preventDefault();
      addProductToBasket(parseInt(productId));
    });
  });
}

render(products);
initSearch();
initBasket();
updateBasket();

export default renderCards;
