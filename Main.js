const nav = document.querySelector(".navbar");
const navMenu = document.querySelector(".links");
const menuIcon = document.querySelector(".menu-icon");

document.addEventListener("scroll", () => {
  if (window.scrollY > 0) {
    nav.classList.add("scrolled");
  } else {
    nav.classList.remove("scrolled");
  }
});

menuIcon.addEventListener("click", () => {
  navMenu.classList.toggle('d-none');
  navMenu.classList.toggle('d-flex');
});
