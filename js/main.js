"use strict";
console.log("main.js");

const app = new Shop();
console.log("app ===", app);

class MyForm {
  formEl = document.forms[0];
  formFieldSetEl = document.getElementById("add-form-field");
  categorySelEl = this.formEl.category;

  categoriesArrFetch = [];

  constructor() {
    this.initListener();
    this.getCategoriesFetch().then(() => this.makeAndAddCategoriesOptions());
  }

  initListener() {
    this.formEl.addEventListener("submit", async (event) => {
      // sustabdyti forma nuo issiuntimo
      event.preventDefault();
      // iskonsolinti kazka
      console.log("js control form");
      // surinkti visus inputus i javascriptini objekta
      // constantos formos elementams
      const { title, price, thumbnail, description, category } =
        this.formEl.elements;

      const newProductObj = {
        title: title.value.trim(),
        price: price.value.trim(),
        thumbnail: thumbnail.value.trim(),
        description: description.value.trim(),
        category: category.value.trim(),
      };
      // isspausdinti objekta
      console.log("newProductObj ===", newProductObj);
      // issiusti objekta i serveri
      const createdPostFromServer = await sendPost(newProductObj);

      if (createdPostFromServer) {
        this.formFieldSetEl.style.display = "none";
        app.addNewProductToList(createdPostFromServer);
      }
    });
  }

  getCategoriesArray(allDataArr) {
    // is allDataArr === app.items
    // atrinkti visas skirtingas kategorijas i masyva ir ji irasyti i this.categoriesArr
  }

  async getCategoriesFetch() {
    // gauti kategorijas is 'https://dummyjson.com/products/categories'
    // irasyti i this.categoriesArrFetch
    this.categoriesArrFetch = await getProductCategories();
    // this.makeAndAddCategoriesOptions();
  }
  makeAndAddCategoriesOptions() {
    // panaudoti kategoriju masyva this.categoriesArrFetch pagalminti pasirinkimus selectui
    this.categoriesArrFetch.forEach((catString) => {
      // sukuriam option elementa
      const optionEl = document.createElement("option");
      optionEl.value = catString;
      optionEl.textContent = catString;
      this.categorySelEl.append(optionEl);
    });
    // sugeneruoti pasirinkimus kategoriju selektui.
  }
  makeAndAddCategoriesFilter() {
    // panaudoti kategoriju masyva this.categoriesArrFetch pagalminti pasirinkimus selectui
    this.categoriesArrFetch.forEach((catString) => {
      // sukuriam option elementa
      const optionEl = document.createElement("option");
      optionEl.value = catString;
      optionEl.textContent = catString;
      this.filterSelEl.append(optionEl);
    });
    // sugeneruoti pasirinkimus kategoriju selektui.
  }
}
async function initFilter() {
  const filterSelectEl = document.getElementById("filter-category");

  filterSelectEl.addEventListener("change", app.filterCategory);

  const catArray = await getProductCategories();
  console.log("catArray ===", catArray);

  catArray.forEach((catString) => {
    const optionEl = document.createElement("option");
    optionEl.value = catString;
    optionEl.textContent = catString;
    filterSelectEl.append(optionEl);
  });
}
initFilter();
const form1 = new MyForm();
console.log("form1 ===", form1);
