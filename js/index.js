const slides = document.querySelectorAll('.slider_slide');
const buttonPrev = document.querySelector('.button_previous');
const buttonNext = document.querySelector('.button_next');
const bullets = document.querySelectorAll('.slides_radio');
const slidesAmount = slides.length;
let currentIndex = 0;

const onSlideChange = (index) => {
  const activeSlide = document.querySelector('.slider_slide--active');
  const activeBullet = document.querySelector('.slides_radio.is_active');

  document.body.classList.remove('color_pink');
  document.body.classList.remove('color_blue');
  document.body.classList.remove('color_yellow');
  document.body.classList.add(`${slides[index].dataset.class}`);
  activeSlide.classList.remove('slider_slide--active');
  slides[index].classList.add('slider_slide--active');
  activeBullet.classList.remove('is_active');
  bullets[index].classList.add('is_active');
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
  buttonPrev.addEventListener('click', onPrevButtonClick);
  buttonNext.addEventListener('click', onNextButtonClick);
  bullets.forEach((element, index) => element.addEventListener('click', () => onSlideChange(index)));
};

initSlider();
