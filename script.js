const menuIcon = document.querySelector(".menu-icon");
const backdrop = document.querySelector(".backdrop");
const navLinks = document.querySelector(".nav-links");
const closeIcon = document.querySelector(".close-icon");

menuIcon.addEventListener("click", () => {
  navLinks.classList.add("active");
  backdrop.classList.add("active");
});

closeIcon.addEventListener("click", () => {
  navLinks.classList.remove("active");
  backdrop.classList.remove("active");
});

backdrop.addEventListener("click", () => {
  navLinks.classList.remove("active");
  backdrop.classList.remove("active");
});
