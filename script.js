const menuIcon = document.querySelector(".menu-icon");
const backdrop = document.querySelector(".backdrop");
const navLinks = document.querySelector(".nav-links");
const closeIcon = document.querySelector(".close-icon");
const mainImages = document.querySelectorAll(".default .main-img img");
const thumbnails = document.querySelectorAll(".default .thumb-list div");

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

const changeImage = (index, mainImages, thumbnails) => {
  mainImages.forEach((img) => {
    img.classList.remove("active");
  });

  thumbnails.forEach((thumb) => {
    thumb.classList.remove("active");
  });

  mainImages[index].classList.add("active");
  thumbnails[index].classList.add("active");
};

thumbnails.forEach((thumb, index) => {
  thumb.addEventListener("click", () => {
    changeImage(index, mainImages, thumbnails);
  });
});
