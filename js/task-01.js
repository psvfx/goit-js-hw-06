"use strict";

const categoriesEl = document.querySelector("#categories");

const numberOfCategories = `Number of categories: ${categoriesEl.children.length}`;

// console.log(numberOfCategories);

[...categoriesEl.children].forEach((item) => {
  const textContentItem = `Category: ${item.firstElementChild.textContent}`;

  //   console.log(textContentItem);

  const numberOfElements = `Elements: ${item.lastElementChild.children.length}`;

  //   console.log(numberOfElements);
});
