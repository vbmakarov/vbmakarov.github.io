"use strict";

var products = [{
  name: "с фуа -гра",
  quantity: 10,
  present: "мышь в подарок",
  weight: "0.5",
  title: "Сказочное заморское явство",
  description: "Печень утки разварная с артишоками.",
  question: '<span class="question">Котэ не одобряет?</span>',
  callToAction: "Чего сидишь? порадуй котэ, ",
  nonStock: "Печалька, с фуа-гра закончился.",
  select: false
}, {
  name: "с рыбой",
  quantity: 40,
  present: "2 мыши в подарок",
  weight: "2",
  title: "Сказочное заморское явство",
  description: "Головы щучьи с чесноком да свежайшая сёмгушка.",
  question: '<span class="question">Котэ не одобряет?</span>',
  callToAction: "Чего сидишь? порадуй котэ, ",
  nonStock: "Печалька, с рыбой закончился.",
  select: false
}, {
  name: "с курицей",
  quantity: 0,
  present: "5 мышей в подарок заказчик доволен",
  weight: "5",
  title: "Сказочное заморское явство",
  description: "Филе из цыплят с трюфелями в бульоне.",
  question: '<span class="question">Котэ не одобряет?</span>',
  callToAction: "Чего сидишь? порадуй котэ, ",
  nonStock: "Печалька, с курицей закончился.",
  select: false
}];
var productContainer = document.querySelector(".main__products");
products.forEach(function (product, index) {
  var card = document.createElement("div");
  card.classList.add("products__card");
  card.classList.add("product");
  !product.quantity ? card.classList.add("products__card_n") : null;
  var html = "<div class=".concat(!product.quantity ? "product__nonstock" : "product__wrapper", ">\n            <div class=\"product__item\">\n                <div class=\"product__text\">\n                    <div class=\"product__title\">").concat(product.title, "</div>\n                    <div class=\"product__name\">\u041D\u044F\u043C\u0443\u0448\u043A\u0430</div>\n                    <div class=\"product__type\">").concat(product.name, "</div>\n                    <div class=\"product__quantity\">").concat(product.quantity, " \u043F\u043E\u0440\u0446\u0438\u0439</div>\n                    <div class=\"product__present\">").concat(product.present, "</div>\n                </div>\n                <img src=\"img/cat.png\" alt=\"\u043A\u043E\u0448\u0430\u0447\u0438\u0439 \u043A\u043E\u0440\u043C\"/>\n            </div>\n            <div class=\"product__weight weight\" ").concat(!product.quantity ? 'style="background:#555"' : "", "><span class=\"weight__number\">").concat(product.weight, "</span><span class=\"weight__size\">\u043A\u0433</span></div>\n        </div>\n        <div class=\"product__action\">\n        ").concat(product.quantity > 0 ? '<span class="product__description">' + product.callToAction + '</span><span class="product__buy">купи</span>' : '<span class="product__empty">' + product.nonStock + "</span>", "\n        </div>");
  card.innerHTML = html;
  productContainer.appendChild(card);
  var productItem = card.querySelector(".product__item");
  var buy = card.querySelector(".product__buy");
  var wrapper = card.querySelector(".product__wrapper");
  var title = card.querySelector(".product__title");

  var setTextMouseOut = function setTextMouseOut(e) {
    title.innerHTML = product.question;
  };

  var setTextMouseOver = function setTextMouseOver(e) {
    title.innerHTML = product.title;
  };

  productItem.onclick = selectProduct(product, card, wrapper, title, setTextMouseOut, setTextMouseOver);

  if (buy) {
    buy.onclick = selectProduct(product, card, wrapper, title, setTextMouseOut, setTextMouseOver);
  }
});

function selectProduct(product, card, wrapper, title, setTextMouseOut, setTextMouseOver) {
  var weight = card.querySelector(".product__weight");
  var description = card.querySelector(".product__description");
  var buy = card.querySelector(".product__buy");
  return function () {
    wrapper.classList.toggle("product__active");
    weight.classList.toggle("product__weight_a");
    product.select = !product.select;
    description.innerHTML = product.select ? product.description : product.callToAction;

    if (product.select) {
      buy.classList.add("product__buy_none");
      wrapper.addEventListener("mouseout", setTextMouseOut);
      wrapper.addEventListener("mouseover", setTextMouseOver);
    }

    if (!product.select) {
      buy.classList.remove("product__buy_none");
      title.innerHTML = product.title;
      wrapper.removeEventListener("mouseover", setTextMouseOver);
      wrapper.removeEventListener("mouseout", setTextMouseOut);
    }
  };
}