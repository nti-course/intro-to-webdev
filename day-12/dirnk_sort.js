const drinks = [
  { name: "lemonade", price: 50 },
  { name: "orange", price: 30 },
  { name: "lime", price: 10 },
  { name: "mango", price: 60 },
];

/**
 * Sort the drinks by price
 */
function drinksSort(drinks) {
  return drinks.sort((a, b) => b.price - a.price);
}

console.log(drinksSort(drinks));
