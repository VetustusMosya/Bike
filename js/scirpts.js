"use strict";

document.querySelector(".header__buttons--bars").onclick = function () {
  document.querySelector(".header__menu").style.opacity = "1";
  document.querySelector(".header__menu").style.zIndex = "9999999";
};

document.querySelector(".header__menu--button-bars").onclick = function () {
  document.querySelector(".header__menu").style.opacity = "0";
  document.querySelector(".header__menu").style.zIndex = "1";
};
