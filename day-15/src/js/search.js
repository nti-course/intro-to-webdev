import { addProductToBasket } from "./addProductToBasket";
import { Basket } from "./basket";
import { products } from "./db";
import { initSearch, NavBar } from "./navbar";
import { updateBasket } from "./addProductToBasket";
import render from "./products";
import { fuse } from "./fuse";

const searchParam = new URLSearchParams(window.location.search).get("q");
const matches = fuse.search(searchParam).map((match) => match.item);
if (matches.length === 0) {
  render([]);
} else {
  render(matches);
}
