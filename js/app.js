const menuMobile = document.querySelector(".menu-toggle");
const nav = document.querySelector(".nav");

menuMobile.addEventListener("click", () => nav.classList.toggle("active"));
