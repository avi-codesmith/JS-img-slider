"use strict";

const scrollWrapper = document.querySelector(".gallery");
const iconLeft = document.querySelector(".icon-left");
const iconRight = document.querySelector(".icon-right");
const border = document.querySelectorAll(".icon-border");
const moon = document.querySelector(".moon");
const no = document.querySelector(".no");
const body = document.querySelector(".container");
const stopP = document.querySelector(".stopP");
const moonP = document.querySelector(".moonP");

let clickmoon = false;
let autoScrollActive = true;

scrollWrapper.addEventListener("wheel", (e) => {
  e.preventDefault();
  scrollWrapper.scrollLeft += e.deltaY;
});

function autoScroll() {
  if (!autoScrollActive) return;

  scrollWrapper.scrollBy({ left: 1000, behavior: "smooth" });
  setTimeout(() => {
    if (!autoScrollActive) return;
    scrollWrapper.scrollBy({ left: -1000, behavior: "smooth" });
    setTimeout(() => {
      if (!autoScrollActive) return;
      scrollWrapper.scrollBy({ left: 1000, behavior: "smooth" });
      setTimeout(autoScroll, 2000);
    }, 2000);
  }, 2000);
}

setTimeout(autoScroll, 2500);

function LightTheme() {
  body.style.backgroundColor = "#ddd";
  moon.style.fill = "#fff";
  moon.style.stroke = "#111";
  iconLeft.style.stroke = "#111";
  iconRight.style.stroke = "#111";
  stopP.style.color = "#111";
  moonP.style.color = "#111";
  no.style.stroke = "#111";
  no.style.fill = "#fff";
  border.forEach((svg) => {
    svg.style.border = "2px solid #111";
  });
  localStorage.setItem("theme", "light");
}

function DarkTheme() {
  body.style.backgroundColor = "#111";
  moon.style.fill = "#111";
  moon.style.stroke = "#fff";
  iconRight.style.stroke = "#fff";
  iconLeft.style.stroke = "#fff";
  stopP.style.color = "#fff";
  moonP.style.color = "#fff";
  no.style.fill = "#111";
  no.style.stroke = "#fff";
  border.forEach((svg) => {
    svg.style.border = "2px solid #fff";
  });
  localStorage.setItem("theme", "dark");
}

iconRight.addEventListener("click", (e) => {
  e.preventDefault();
  scrollWrapper.scrollBy({ left: 1000, behavior: "smooth" });
});

iconLeft.addEventListener("click", (e) => {
  e.preventDefault();
  scrollWrapper.scrollBy({ left: -1000, behavior: "smooth" });
});

moon.addEventListener("click", () => {
  clickmoon = !clickmoon;
  if (clickmoon) {
    LightTheme();
  } else {
    DarkTheme();
  }
});

no.addEventListener("click", () => {
  if (autoScrollActive) {
    autoScrollActive = false;
  } else {
    autoScrollActive = true;
    autoScroll();
  }
});

window.addEventListener("load", () => {
  const savedTheme = localStorage.getItem("theme");
  if (savedTheme === "light") {
    clickmoon = true;
    LightTheme();
  } else {
    clickmoon = false;
    DarkTheme();
  }
});
