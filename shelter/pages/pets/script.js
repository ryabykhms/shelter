const burger = document.querySelector('.header__burger');
const menu = document.querySelector('.header__menu');
const body = document.querySelector('body');
const logo = document.querySelector('.header__logo');
const headerMain = document.querySelector('.header__main');
const headerWrapper = document.querySelector('.header__wrapper');
burger.addEventListener('click', (e) => {
  burger.classList.toggle('active');
  menu.classList.toggle('active');
  body.classList.toggle('lock');
  if (burger.classList.contains('active')) {
    menu.prepend(headerMain);
  } else {
    headerWrapper.prepend(headerMain);
  }
});
