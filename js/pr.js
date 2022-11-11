"use strict";
console.log("pr.js");

const productEl = document.getElementById("item");
const titleEl = document.querySelector("h1");

// suzinoti koks dabartinio produkto id
console.log("window.location.search ===", window.location.search);
const urlParams = new URLSearchParams(window.location.search);
const productId = urlParams.get("prId");
console.log(productId);
// parsiusti ta produkta
getSingleProduct(productId).then((productObj) => {
  productEl.innerHTML = "";
  console.log("productObj ===", productObj);
  titleEl.textContent = productObj.title;
  const htmlProductEl = makeOneSingItem(productObj);
  productEl.append(htmlProductEl);
});
// sugeneruoti jo html arba supildyti html
