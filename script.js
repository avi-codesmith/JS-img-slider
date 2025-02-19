"use strict";

const scrollWrapper = document.querySelector(".gallery");
const iconLeft = document.querySelector(".icon-left");
const iconRight = document.querySelector(".icon-right");

scrollWrapper.addEventListener("wheel", (e) => {
  e.preventDefault();
  scrollWrapper.scrollLeft += e.deltaY;
});
