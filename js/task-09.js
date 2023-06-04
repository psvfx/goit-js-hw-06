"use strict";

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

const divEl = document.querySelector(".widget");

divEl.lastElementChild.addEventListener("click", () => {
  divEl.parentNode.style.backgroundColor = getRandomHexColor();

  divEl.firstElementChild.firstElementChild.textContent = getRandomHexColor();
});
