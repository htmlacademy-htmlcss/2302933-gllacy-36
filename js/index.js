// СТИРАНИЕ ТЕКСТА В ПОЛЕ ПОИСКА ПО САЙТУ
const searchInput = document.querySelector('.search-input');
const searchResetButton = document.querySelector('.search-reset-button');
searchResetButton.addEventListener('click', () => {
  searchInput.value = '';
  searchInput.focus();
});


// МОДАЛЬНОЕ ОКНО

const modalOpen = document.querySelector('.contacts-button');
const modalClose = document.querySelector('.modal-close-button');
const modal = document.querySelector('.modal-container');

modalOpen.addEventListener('click', (evt) => {
  evt.preventDefault();
  modal.classList.remove('hidden');
});

modal.addEventListener('click', (evt) => {
  if (!evt.target.classList.contains('modal')) {
    modal.classList.add('hidden');
  }
});

document.addEventListener('keydown', (evt) => {
  if (evt.key === 'Escape') {
    modal.classList.add('hidden');
  }
});

modalClose.addEventListener('click', () => {
  modal.classList.add('hidden');
});



// СЛАЙДЕР

const slidesTabButtons = document.querySelectorAll('.slider-pagination-button');
const slides = document.querySelectorAll('.slide');
const buttonPrevious = document.querySelector('.slide-previous');
const buttonNext = document.querySelector('.slide-next');
let counter = 0;

const clearClasses = () => {
  document.querySelector('.slide-current').classList.remove('slide-current');
  document.querySelector('.slider-pagination-button-active').classList.remove('slider-pagination-button-active');
};

slidesTabButtons.forEach((tab, index) => {
  tab.addEventListener('click', () => {
    clearClasses();
    counter = index;
    slides[index].classList.add('slide-current');
    document.body.style.backgroundColor = slides[counter].dataset.theme;
    tab.classList.add('slider-pagination-button-active');
  });
});

buttonPrevious.addEventListener('click', () => {
  clearClasses();
  counter = counter - 1;
  if (counter < 0) {
    counter = slides.length - 1;
  }

  slides[counter].classList.add('slide-current');
  document.body.style.backgroundColor = slides[counter].dataset.theme;
  slidesTabButtons[counter].classList.add('slider-pagination-button-active');
});

buttonNext.addEventListener('click', () => {
  clearClasses();
  counter = counter + 1;
  if (counter > slides.length - 1) {
    counter = 0;
  }

  slides[counter].classList.add('slide-current');
  document.body.style.backgroundColor = slides[counter].dataset.theme;
  slidesTabButtons[counter].classList.add('slider-pagination-button-active');
});
