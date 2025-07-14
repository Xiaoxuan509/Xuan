const toggleBtn = document.querySelector(".menu-toggle");
const menu = document.querySelector("nav ul");
const overlay = document.querySelector(".overlay");

toggleBtn.addEventListener("click", () => {
  menu.classList.toggle("show");
  overlay.classList.toggle("show");
});

overlay.addEventListener("click", () => {
  menu.classList.remove("show");
  overlay.classList.remove("show");
});
