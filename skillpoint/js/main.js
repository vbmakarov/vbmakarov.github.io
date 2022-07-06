"use strict";

var toggleBlocks = document.querySelectorAll(".block__toggle");
var descriptionBlocks = document.querySelectorAll(".block__description");

if (toggleBlocks.length) {
  for (var i = 0; i < toggleBlocks.length; i++) {
    toggleBlocks[i].addEventListener("click", handleToggleBlock);
  }
}

function handleToggleBlock(event) {
  if (event.currentTarget.classList.contains("block__toggle_active")) {
    return;
  }

  for (var _i = 0; _i < toggleBlocks.length; _i++) {
    toggleBlocks[_i].classList.toggle("block__toggle_active");
  }

  if (descriptionBlocks.length) {
    for (var _i2 = 0; _i2 < descriptionBlocks.length; _i2++) {
      descriptionBlocks[_i2].classList.toggle("block__description_active");
    }
  }
}