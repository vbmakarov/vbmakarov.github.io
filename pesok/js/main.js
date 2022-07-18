/*Swiper slider*/
const swiper1 = new Swiper(".catalog__services", {
  // Optional parameters
  direction: "horizontal",
  loop: true,
  slidesPerView: 1,

  // Navigation arrows
  navigation: {
    nextEl: ".service__button_next",
    prevEl: ".service__button_prev",
  },

  // And if we need scrollbar
  scrollbar: {
    el: ".swiper-scrollbar",
  },
  breakpoints: {
    // настройки для разных разрешений
    580: {
      slidesPerView: 1,
    },
    768: {
      slidesPerView: 2,
    },
    991: {
      slidesPerView: 3,
    },
    1192: {
      slidesPerView: 4,
    },
  },
});

const swiper2 = new Swiper(".feedbacks__slides", {
  // Optional parameters
  direction: "horizontal",
  loop: true,
  slidesPerView: 1,

  // Navigation arrows
  navigation: {
    nextEl: ".feedback__button_next",
    prevEl: ".feedback__button_prev",
  },

  breakpoints: {
    // настройки для разных разрешений
    1093: {
      spaceBetween: 20,
      slidesPerView: 2,
    },
  },
});

/*******************************************/

/*****************Advantege counter**************************/
function startCount() {
  const numbers = document.querySelectorAll(".advantage__numbers span");
  for (let number of numbers) {
    const finish = +number.textContent;
    const start = 0;
    let currentNumber = start;
    number.textContent = start;
    const currentInterval = setInterval(() => {
      currentNumber = currentNumber + 1;
      if (currentNumber === finish) {
        clearInterval(currentInterval);
      }
      number.textContent = currentNumber;
    });
  }
}
startCount();
/*****************\Advantege counter**************************/

const burger = document.querySelector(".header__burger");
const burgerSpan = document.querySelector(".header__burger span");
const burgerMenu = document.querySelector(".burger__menu");
const body = document.querySelector("body");

burger.addEventListener("click", () => {
  burgerSpan.classList.toggle("active");
  burgerMenu.classList.toggle("active");
  burger.classList.toggle("active");
});

const closeModal = document.querySelector(".modal__close");
const openModalElems = document.querySelectorAll(".modal__open");
const modal = document.querySelector(".modal");

closeModal.addEventListener("click", () => {
  if (modal.classList.contains("active")) {
    modal.classList.remove("active");
  }
});

if (openModalElems.length) {
  for (let elem of openModalElems) {
    elem.addEventListener("click", () => {
      if (!modal.classList.contains("active")) {
        modal.classList.add("active");
      }
    });
  }
}
