"use strict";
const toggleBlocks = document.querySelectorAll(".block__toggle");
const descriptionBlocks = document.querySelectorAll(".block__description");

if (toggleBlocks.length) {
  for (let i = 0; i < toggleBlocks.length; i++) {
    toggleBlocks[i].addEventListener("click", handleToggleBlock);
  }
}

function handleToggleBlock(event) {
  if (event.currentTarget.classList.contains("block__toggle_active")) {
    return;
  }
  for (let i = 0; i < toggleBlocks.length; i++) {
    toggleBlocks[i].classList.toggle("block__toggle_active");
  }
  if (descriptionBlocks.length) {
    for (let i = 0; i < descriptionBlocks.length; i++) {
      descriptionBlocks[i].classList.toggle("block__description_active");
    }
  }
}
