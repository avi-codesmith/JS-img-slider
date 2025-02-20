"use strict";

const scrollWrapper = document.querySelector(".gallery");
const iconLeft = document.querySelector(".icon-left");
const iconRight = document.querySelector(".icon-right");
const border = document.querySelectorAll(".icon-border");
const moon = document.querySelector(".moon");
const body = document.querySelector(".container");
let clickmoon = false;

scrollWrapper.addEventListener("wheel", (e) => {
  e.preventDefault();
  scrollWrapper.scrollLeft += e.deltaY;
});

function autoScroll() {
  scrollWrapper.scrollBy({ left: 1000, behavior: "smooth" });
  setTimeout(() => {
    scrollWrapper.scrollBy({ left: -1000, behavior: "smooth" });
    setTimeout(() => {
      scrollWrapper.scrollBy({ left: 1000, behavior: "smooth" });
      setTimeout(autoScroll, 2000);
    }, 2000);
  }, 2000);
}
setTimeout(autoScroll, 2000);

function LightTheme() {
  body.style.backgroundColor = "#ddd";
  moon.style.fill = "#fff";
  moon.style.stroke = "#111";
  iconLeft.style.stroke = "#111";
  iconRight.style.stroke = "#111";
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
  border.forEach((svg) => {
    svg.style.border = "2px solid #fff";
  });
  localStorage.setItem("theme", "dark");
}

iconRight.addEventListener("click", (eR) => {
  eR.preventDefault();
  scrollWrapper.scrollBy({ left: 1000, behavior: "smooth" });
});

iconLeft.addEventListener("click", (eL) => {
  eL.preventDefault();
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
