import { updateBasket } from "./addProductToBasket";

export const localStorageKey = "basket";

export const NavBar = () => {
  return `<nav class="navbar bg-body-tertiary">
      <div class="container-fluid">
        <a class="navbar-brand" href="/products.html">Logo</a>
        <div class="navbar-right">
          <a
            class="btn btn-primary"
            data-bs-toggle="offcanvas"
            href="#offcanvasExample"
            role="button"
            aria-controls="offcanvasExample"
          >
            Open basket
          </a>
          <form class="d-flex" role="search">
            <input
              class="form-control me-2"
              type="search"
              placeholder="Search"
              aria-label="Search"
            />
            <button class="btn btn-outline-success" type="submit">
              Search
            </button>
          </form>
        </div>
      </div>
    </nav>`;
};

export const initBasket = () => {
  const storedBasket = window.localStorage.getItem(localStorageKey);
  if (!Array.isArray(window.basket) && storedBasket == null) {
    console.log("here");
    window.basket = [];
  } else {
    window.basket = JSON.parse(storedBasket) || [];
  }

  const emptyBasketButton = document.querySelector(".offcanvas-body button");
  emptyBasketButton.addEventListener("click", () => {
    window.basket = [];
    window.localStorage.setItem(localStorageKey, JSON.stringify(window.basket));
    updateBasket();
  });
};

export const initSearch = () => {
  const searchInput = document.querySelector("nav form input");
  const searchButton = document.querySelector("nav form button");

  searchButton.addEventListener("click", (event) => {
    event.preventDefault();
    const searchValue = searchInput.value;
    window.location.href = `/search.html?q=${encodeURIComponent(searchValue)}`;
  });
};
