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

document.addEventListener('click', function (e) {
  const target = e.target;
  const isMenu = target == menu || menu.contains(target);
  const isBurger = target == burger;
  const isMenuActive = menu.classList.contains('active');

  if (!isMenu && !isBurger && isMenuActive) {
    burger.classList.toggle('active');
    menu.classList.toggle('active');
    body.classList.toggle('lock');
    headerWrapper.prepend(headerMain);
  }
});
