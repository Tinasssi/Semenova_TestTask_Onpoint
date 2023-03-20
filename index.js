const btnOne = document.querySelector('.button_one-img');
const blockOne = document.querySelector('.one');
const blockTwo = document.querySelector('.two');
const blockThree = document.querySelector('.three');
const home = document.querySelector('.button_global-img');
const start = document.querySelector('.main-wrap');
const btnThree = document.querySelector('.button_3');
const popUp = document.querySelector('.popup');
const closePop = document.querySelector('.close');
const nextPage = document.querySelector('.btn_next');
const prevPage = document.querySelector('.btn_prev');
const pagina = document.querySelector('.btn_pagina');
const popUp_txt1 = document.querySelector('.popup_txt1');
const popUp_txt2 = document.querySelector('.popup_txt2');

//переход с 1 слайда по кнопке
btnOne.addEventListener('click', () => {
  blockOne.classList.add('ml');
});

// попап на 3 экране
btnThree.addEventListener('click', () => {
  popUp.classList.remove('hidden');
});

closePop.addEventListener('click', () => {
  popUp.classList.add('hidden');
});

nextPage.addEventListener('click', () => {
  popUp_txt1.classList.add('hidden');
  popUp_txt2.classList.remove('hidden');
  pagina.classList.remove('hidden');
});

prevPage.addEventListener('click', () => {
  popUp_txt1.classList.remove('hidden');
  popUp_txt2.classList.add('hidden');
  pagina.classList.add('hidden');
});

// домой
home.addEventListener('click', () => {
  location.reload();
});

// слайдер
let touchstartX = 0;
let touchstartY = 0;
let touchendX = 0;
let touchendY = 0;

document.addEventListener(
  'touchstart',
  function (event) {
    touchstartX = event.targetTouches[0].screenX;
  },
  false
);

document.addEventListener(
  'touchend',
  function (event) {
    touchendX = event.changedTouches[0].screenX;
    handleGesure(event.target);
  },
  false
);

function handleGesure(elem) {
  let elemClass = elem.classList[0];

  // для 1-го окна
  if (elemClass == 'one' || elem.closest('.one')) {
    if (touchstartX - touchendX > 150) {
      blockOne.classList.add('ml');
    }
  }

  // для 2-го окна
  if (elemClass == 'two' || elem.closest('.two')) {
    if (touchstartX - touchendX > 150) {
      blockTwo.classList.add('ml');
    }
    if (touchendX - touchstartX > 150) {
      blockOne.classList.remove('ml');
    }
  }

  // для 3-го окна
  if (elemClass == 'three' || elem.closest('.three')) {
    if (touchendX - touchstartX > 150) {
      blockTwo.classList.remove('ml');
    }
  }
}
