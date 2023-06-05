"use strict";

const listIngredientsEl = document.querySelector("#ingredients");

const ingredients = [
  "Potatoes",
  "Mushrooms",
  "Garlic",
  "Tomatos",
  "Herbs",
  "Condiments",
];

const boxe = [];
const markup = ingredients
  .map((ingredient) => {
    const tagLi = document.createElement("li");
    tagLi.textContent = ingredient;
    tagLi.classList.add("item");
    boxe.push(tagLi);
  })
  .join("");
listIngredientsEl.append(...boxe);
