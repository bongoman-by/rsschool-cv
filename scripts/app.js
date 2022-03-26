import * as vars from "../scripts/variables.js";

window.addEventListener("DOMContentLoaded", () => {
  function hamburger() {
    const hamburger = document.querySelector(".hamburger"),
      menu = document.querySelector(".menu"),
      menuClose = document.querySelector(".menu__close"),
      menuList = document.querySelector(".menu__list"),
      overlay = document.querySelector(".menu__overlay");

    hamburger.addEventListener("click", () => {
      menu.classList.add("active");
    });

    menuClose.addEventListener("click", () => {
      menu.classList.remove("active");
    });

    overlay.addEventListener("click", () => {
      if (menu.classList.contains("active")) {
        menu.classList.remove("active");
      }
    });

    menuList.addEventListener("click", (e) => {
      console.dir(e.target);
      if (e.target.parentNode.classList.contains("menu__link")) {
        menu.classList.remove("active");
      }
    });
  }

  function progress() {
    const counters = document.querySelectorAll(".progress__item-counter"),
      lines = document.querySelectorAll(".progress__item-line span");
    counters.forEach((item, i) => {
      lines[i].style.width = item.innerHTML;
    });
  }

  function setSocialIcons() {
    const social = document.querySelectorAll(".social-icons");
    social.forEach((item, i) => {
      item.innerHTML = vars.socialIconsHTML;
    });
  }

  function buttonLinkHover() {
    const btnLinkElement = document.querySelectorAll(".btn__link");
    btnLinkElement.forEach((item, i) => {
      item.addEventListener("mouseover", () => {
        item.classList.add("btn__link__active");
      });
      item.addEventListener("mouseout", () => {
        item.classList.remove("btn__link__active");
      });
    });
  }

  hamburger();
  progress();
  setSocialIcons();
  buttonLinkHover();
});
