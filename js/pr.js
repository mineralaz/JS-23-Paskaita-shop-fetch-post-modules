"use strict";
console.log("pr.js");

// suzinoti koks dabartinio produkto id
console.log("window.location.search ===", window.location.search);
const urlParams = new URLSearchParams(window.location.search);
const productId = urlParams.get("prId");
console.log(productId);
// parsiusti ta produkta
getSingleProduct(productId).then((productObj) => {
  console.log("productObj ===", productObj);
  renderHTML(productObj);
});
// sugeneruoti jo html arba supildyti html
