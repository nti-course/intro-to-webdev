import Fuse from "fuse.js";
import { products } from "./db";

export const fuse = new Fuse(products, {
  keys: ["title", "description"],
});
