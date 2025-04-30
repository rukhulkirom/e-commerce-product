const menuIcon = document.querySelector(".menu-icon");
const backdrop = document.querySelector(".backdrop");
const navLinks = document.querySelector(".nav-links");
const closeIcon = document.querySelector(".close-icon");
const lightbox = document.querySelector(".lightbox");
const iconClose = document.querySelector(".icon-close");
const iconPrev = document.querySelector(".icon-prev");
const iconNext = document.querySelector(".icon-next");

const mainImages = document.querySelectorAll(".default .main-img img");
const thumbnails = document.querySelectorAll(".default .thumb-list div");
const lightboxMainImages = document.querySelectorAll(".lightbox .main-img img");
const lightboxThumbnails = document.querySelectorAll(
  ".lightbox .thumb-list div"
);

let currentIndex = 0;

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

const changeImage = (index, mainImgs, thumbs) => {
  mainImgs.forEach((img) => img.classList.remove("active"));
  thumbs.forEach((thumb) => thumb.classList.remove("active"));

  mainImgs[index].classList.add("active");
  thumbs[index].classList.add("active");
  currentIndex = index;
};

thumbnails.forEach((thumb, i) => {
  thumb.addEventListener("click", () => changeImage(i, mainImages, thumbnails));
});

lightboxThumbnails.forEach((thumb, i) => {
  thumb.addEventListener("click", () =>
    changeImage(i, lightboxMainImages, lightboxThumbnails)
  );
});

mainImages.forEach((img, i) => {
  img.addEventListener("click", () => {
    lightbox.classList.add("active");
    changeImage(i, lightboxMainImages, lightboxThumbnails);
  });
});

iconPrev.addEventListener("click", () => {
  const newIndex = currentIndex <= 0 ? mainImages.length - 1 : currentIndex - 1;
  changeImage(newIndex, lightboxMainImages, lightboxThumbnails);
});

iconNext.addEventListener("click", () => {
  const newIndex = currentIndex >= mainImages.length - 1 ? 0 : currentIndex + 1;
  changeImage(newIndex, lightboxMainImages, lightboxThumbnails);
});

iconClose.addEventListener("click", () => {
  lightbox.classList.remove("active");
});
