const animItems = document.querySelectorAll(".anim-item");

if (animItems.length) {
  window.addEventListener("scroll", animateElems);

  function animateElems() {
    for (let i = 0; i < animItems.length; i++) {
      const currentAnimElem = animItems[i];
      const currentAnimElemHeight = currentAnimElem.offsetHeight;
      const currentAnimElemCoordsTop = getCoords(currentAnimElem).top;

      let startAnimPoint = window.innerHeight - currentAnimElemHeight / 4;
      if (currentAnimElemHeight > window.innerHeight) {
        startAnimPoint = window.innerHeight - window.innerHeight / 4;
      }

      if (
        pageYOffset > currentAnimElemCoordsTop - startAnimPoint &&
        pageYOffset < currentAnimElemCoordsTop + currentAnimElemHeight
      ) {
        if (!currentAnimElem.classList.contains("show")) {
          currentAnimElem.classList.add("show");
        }
      } else {
        if (!currentAnimElem.classList.contains("no-hide")) {
          currentAnimElem.classList.remove("show");
        }
      }
    }
  }

  function getCoords(elem) {
    const coordsElem = elem.getBoundingClientRect();
    scrollLeft = window.pageXOffset || document.documentElement.scrollLeft;
    scrollTop = window.pageYOffset || document.documentElement.scrollTop;
    return {
      top: coordsElem.top + scrollTop,
      left: coordsElem.left + scrollLeft,
    };
  }

  setTimeout(() => {
    animateElems();
  }, 400);
}
