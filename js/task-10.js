"use strict";

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

const divControlsEl = document.getElementById("controls");
const inputEl = controls.querySelector("input");
const btnCreateEl = document.querySelector("button[data-create]");
const btnDestroyEl = document.querySelector("button[data-destroy]");
const boxesContainer = document.getElementById("boxes");

console.log(boxesContainer);

btnCreateEl.addEventListener("click", createBoxes);
btnDestroyEl.addEventListener("click", destroyBoxes);

function createBoxes() {
  const amount = Number(inputEl.value);
  const boxes = [];

  for (let i = 0; i < amount; i += 1) {
    const divCreate = document.createElement("div");

    divCreate.style.backgroundColor = getRandomHexColor();

    divCreate.style.width = `${30 + i * 10}px`;
    divCreate.style.height = `${30 + i * 10}px`;

    boxes.push(divCreate);
  }

  boxesContainer.append(...boxes);
}

function destroyBoxes() {
  boxesContainer.innerHTML = "";
}
