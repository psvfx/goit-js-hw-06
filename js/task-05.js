"use strict";

const inputEl = document.querySelector("#name-input");
console.log(inputEl);

const outputEl = document.querySelector("#name-output");

inputEl.addEventListener("input", (el) => {
  outputEl.textContent = el.currentTarget.value.trim();

  if (el.currentTarget.value === "") {
    outputEl.textContent = "Anonymous";
  }
});
