"use strict";
console.log("fn.js");

// 'https://dummyjson.com/products';
const BASE_URL = "https://dummyjson.com";
const BASE_URL_DEVELOPMENT = "db.json";

// bendrine fetch funkcija
function getData(from) {
  return fetch(from)
    .then((resp) => resp.json())
    .catch((err) => console.warn("klaida getData", err));
}

// konkreti funkcija gauti produktams
function getProducts() {
  return getData(`${BASE_URL_DEVELOPMENT}`).then((data) => data.products);
}

function getSingleProduct(id) {
  return getData(`${BASE_URL}/products/${id}`).then((item) => item);
}
// getSingleProduct(5);
// getProducts().then(products);
