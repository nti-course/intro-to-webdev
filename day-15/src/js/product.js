import { products } from "./db";
import "../scss/product.scss";
import { initBasket, initSearch, NavBar } from "./navbar";
import { Basket } from "./basket";
import { addProductToBasket, updateBasket } from "./addProductToBasket";

const url = new URL(document.URL);
const title = decodeURIComponent(url.searchParams.get("title"));
const product = products.find((dbProduct) => title === dbProduct.title);

function ProductPage({ title, imgSrc, alt, description, price }) {
  return `<div class="product-layout container mt-5">
    <div class="row">
      <div class="col-md-6">
        <img src="${imgSrc}" class="w-100 h-auto object-fit-lg-contain" alt="${alt}">
      </div>
      <div class="col-md-6">
        <h1 class="display-4">${title}</h1>
        <p class="lead">${description}</p>
        <h3 class="text-primary">$${price}</h3>
        <a href="#" class="btn btn-primary btn-lg mt-3">
          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-cart-plus" viewBox="0 0 16 16">
            <path d="M9 5.5a.5.5 0 0 0-1 0V7H6.5a.5.5 0 0 0 0 1H8v1.5a.5.5 0 0 0 1 0V8h1.5a.5.5 0 0 0 0-1H9z"/>
            <path d="M.5 1a.5.5 0 0 0 0 1h1.11l.401 1.607 1.498 7.985A.5.5 0 0 0 4 12h1a2 2 0 1 0 0 4 2 2 0 0 0 0-4h7a2 2 0 1 0 0 4 2 2 0 0 0 0-4h1a.5.5 0 0 0 .491-.408l1.5-8A.5.5 0 0 0 14.5 3H2.89l-.405-1.621A.5.5 0 0 0 2 1zm3.915 10L3.102 4h10.796l-1.313 7zM6 14a1 1 0 1 1-2 0 1 1 0 0 1 2 0m7 0a1 1 0 1 1-2 0 1 1 0 0 1 2 0"/>
          </svg> Add to Basket
        </a>
      </div>
    </div>
  </div>`;
}

function render() {
  document.body.innerHTML = NavBar();

  const basketWrapper = document.createElement("div");
  basketWrapper.innerHTML = Basket();
  document.body.appendChild(basketWrapper);

  const div = document.createElement("div");
  document.body.appendChild(div);
  div.innerHTML = ProductPage(product);

  const addProductButton = document.querySelector(".product-layout .btn");
  addProductButton.addEventListener("click", (event) => {
    event.preventDefault();
    addProductToBasket(product.id);
  });
}

render();
initSearch();
initBasket();
updateBasket();
