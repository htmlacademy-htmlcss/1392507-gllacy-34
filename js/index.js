const slides = document.querySelectorAll(".slider_slide");
const buttonPrev = document.querySelector(".button_previous");
const buttonNext = document.querySelector(".button_next");
const bullets = document.querySelectorAll(".slides_radio");
const slidesAmount = slides.length;
let currentIndex = 0;

const onSlideChange = (index) => {
  const activeSlide = document.querySelector(".slider_slide.is_active");
  const activeBullet = document.querySelector(
    ".slides_radio.is_active"
  );

  document.body.style.backgroundColor = slides[index].dataset.color;
  slides.forEach((element) => (element.style.order = ""));
  activeSlide.classList.remove("is_active");
  slides[index].classList.add("is_active");
  slides[index].style.order = "-1";
  activeBullet.classList.remove("is_active");
  bullets[index].classList.add("is_active");
};

const onPrevButtonClick = (evt) => {
  evt.preventDefault();
  currentIndex--;

  if (currentIndex < 0) {
    currentIndex = slidesAmount - 1;
  }

  onSlideChange(currentIndex);
};

const onNextButtonClick = (evt) => {
  evt.preventDefault();
  currentIndex++;

  if (currentIndex === slidesAmount) {
    currentIndex = 0;
  }

  onSlideChange(currentIndex);
};

const initSlider = () => {
  buttonPrev.addEventListener("click", onPrevButtonClick);
  buttonNext.addEventListener("click", onNextButtonClick);
  bullets.forEach((element, index) =>
    element.addEventListener("click", () => onSlideChange(index))
  );
};

initSlider();

const feedbackButton = document.querySelector(".feedback_button");
const modalCloseButton = document.querySelector(".modal_close_button");
const modal = document.querySelector(".modal_container");

feedbackButton.addEventListener("click", (evt) => {
  evt.preventDefault();
  modal.classList.add("is_open");
});

modalCloseButton.addEventListener("click", (evt) => {
  evt.preventDefault();
  modal.classList.remove("is_open");
});

document.addEventListener("keydown", (evt) => {
  if (evt.key === "Escape") {
    evt.preventDefault();
    modal.classList.remove("is_open");
  }
});

document.addEventListener("click", (evt) => {
  if (evt.target === modal) {
    modal.classList.remove("is_open");
  }
});
