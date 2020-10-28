// Burger Menu
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
});
document.addEventListener('click', function (e) {
  const target = e.target;
  const isMenu = target == menu || menu.contains(target);
  const isBurger = target.closest('.header__burger') == burger;
  const isMenuActive = menu.classList.contains('active');

  if (!isMenu && !isBurger && isMenuActive) {
    burger.classList.toggle('active');
    menu.classList.toggle('active');
    body.classList.toggle('lock');
  }
});

//
const pets = [
  {
    id: 1,
    name: 'Katrine',
    img: '../../assets/images/pets-katrine.png',
    type: 'Cat',
    breed: 'British Shorthair',
    description:
      'Katrine is a beautiful girl. She is as soft as the finest velvet with a thick lush fur. Will love you until the last breath she takes as long as you are the one. She is picky about her affection. She loves cuddles and to stretch into your hands for a deeper relaxations.',
    age: '6 months',
    inoculations: ['panleukopenia'],
    diseases: ['none'],
    parasites: ['none'],
  },
  {
    id: 2,
    name: 'Jennifer',
    img: '../../assets/images/pets-jennifer.png',
    type: 'Dog',
    breed: 'Labrador',
    description:
      "Jennifer is a sweet 2 months old Labrador that is patiently waiting to find a new forever home. This girl really enjoys being able to go outside to run and play, but won't hesitate to play up a storm in the house if she has all of her favorite toys.",
    age: '2 months',
    inoculations: ['none'],
    diseases: ['none'],
    parasites: ['none'],
  },
  {
    id: 3,
    name: 'Woody',
    img: '../../assets/images/pets-woody.png',
    type: 'Dog',
    breed: 'Golden Retriever',
    description:
      'Woody is a handsome 3 1/2 year old boy. Woody does know basic commands and is a smart pup. Since he is on the stronger side, he will learn a lot from your training. Woody will be happier when he finds a new family that can spend a lot of time with him.',
    age: '3 years 6 months',
    inoculations: ['adenovirus', 'distemper'],
    diseases: ['right back leg mobility reduced'],
    parasites: ['none'],
  },
  {
    id: 4,
    name: 'Sophia',
    img: '../../assets/images/pets-sophia.png',
    type: 'Dog',
    breed: 'Shih tzu',
    description:
      "Sophia here and I'm looking for my forever home to live out the best years of my life. I am full of energy. Everyday I'm learning new things, like how to walk on a leash, go potty outside, bark and play with toys and I still need some practice.",
    age: '1 month',
    inoculations: ['parvovirus'],
    diseases: ['none'],
    parasites: ['none'],
  },
  {
    id: 5,
    name: 'Timmy',
    img: '../../assets/images/pets-timmy.png',
    type: 'Cat',
    breed: 'British Shorthair',
    description:
      'Timmy is an adorable grey british shorthair male. He loves to play and snuggle. He is neutered and up to date on age appropriate vaccinations. He can be chatty and enjoys being held. Timmy has a lot to say and wants a person to share his thoughts with.',
    age: '2 years 3 months',
    inoculations: ['calicivirus', 'viral rhinotracheitis'],
    diseases: ['kidney stones'],
    parasites: ['none'],
  },
  {
    id: 6,
    name: 'Charly',
    img: '../../assets/images/pets-charly.png',
    type: 'Dog',
    breed: 'Jack Russell Terrier',
    description:
      'This cute boy, Charly, is three years old and he likes adults and kids. He isn’t fond of many other dogs, so he might do best in a single dog home. Charly has lots of energy, and loves to run and play. We think a fenced yard would make him very happy.',
    age: '8 years',
    inoculations: ['bordetella bronchiseptica', 'leptospirosis'],
    diseases: ['deafness', 'blindness'],
    parasites: ['lice', 'fleas'],
  },

  {
    id: 7,
    name: 'Scarlett',
    img: '../../assets/images/pets-scarlet.png',
    type: 'Dog',
    breed: 'Jack Russell Terrier',
    description:
      'Scarlett is a happy, playful girl who will make you laugh and smile. She forms a bond quickly and will make a loyal companion and a wonderful family dog or a good companion for a single individual too since she likes to hang out and be with her human.',
    age: '3 months',
    inoculations: ['parainfluenza'],
    diseases: ['none'],
    parasites: ['none'],
  },

  {
    id: 8,
    name: 'Freddie',
    img: '../../assets/images/pets-freddie.png',
    type: 'Cat',
    breed: 'British Shorthair',
    description:
      'Freddie is a little shy at first, but very sweet when he warms up. He likes playing with shoe strings and bottle caps. He is quick to learn the rhythms of his human’s daily life. Freddie has bounced around a lot in his life, and is looking to find his forever home.',
    age: '2 months',
    inoculations: ['rabies'],
    diseases: ['none'],
    parasites: ['none'],
  },
];

// Popup
class Modal {
  constructor(classes) {
    this.classes = classes;
    this.modal = '';
    this.modalWrapper = '';
    this.modalContent = '';
    this.modalCloseBtn = '';
    this.overlay = '';
  }

  buildModal(content) {
    // Overlay
    this.overlay = this.createDomNode(
      this.overlay,
      'div',
      'overlay',
      'overlay_modal'
    );

    this.modalWrapper = this.createDomNode(
      this.modalWrapper,
      'div',
      'modal-wrapper'
    );

    // Modal
    this.modal = this.createDomNode(this.modal, 'div', 'modal', this.classes);

    // Modal content
    this.modalContent = this.createDomNode(
      this.modalContent,
      'div',
      'modal__content'
    );

    // Close button
    this.modalCloseBtn = this.createDomNode(
      this.modalCloseBtn,
      'div',
      'modal__close-icon'
    );
    this.modalCloseBtn.innerHTML = `<svg width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path fill-rule="evenodd" clip-rule="evenodd" d="M7.42618 6.00003L11.7046 1.72158C12.0985 1.32775 12.0985 0.689213 11.7046 0.295433C11.3108 -0.0984027 10.6723 -0.0984027 10.2785 0.295433L5.99998 4.57394L1.72148 0.295377C1.32765 -0.098459 0.68917 -0.098459 0.295334 0.295377C-0.0984448 0.689213 -0.0984448 1.32775 0.295334 1.72153L4.57383 5.99997L0.295334 10.2785C-0.0984448 10.6723 -0.0984448 11.3108 0.295334 11.7046C0.68917 12.0985 1.32765 12.0985 1.72148 11.7046L5.99998 7.42612L10.2785 11.7046C10.6723 12.0985 11.3108 12.0985 11.7046 11.7046C12.0985 11.3108 12.0985 10.6723 11.7046 10.2785L7.42618 6.00003Z" fill="#292929"/>
    </svg> 
    `;

    this.setContent(content);

    this.appendModalElements();

    // Bind Events
    this.bindEvents();

    this.openModal();
  }

  createDomNode(node, element, ...classes) {
    node = document.createElement(element);
    node.classList.add(...classes);
    return node;
  }

  setContent(content) {
    if (typeof content === 'string') {
      this.modalContent.innerHTML = content;
    } else {
      this.modalContent.innerHTML = '';
      this.modalContent.appendChild(content);
    }
  }

  appendModalElements() {
    this.modal.append(this.modalContent);
    this.modalWrapper.append(this.modalCloseBtn);
    this.modalWrapper.append(this.modal);
    this.overlay.append(this.modalWrapper);
  }

  hoverCloseBtn(e) {
    const target = e.target;
    if (target == this.overlay || target == this.modalWrapper) {
      this.modalCloseBtn.classList.add('hover');
    } else {
      if (this.modalCloseBtn.classList.contains('hover')) {
        this.modalCloseBtn.classList.remove('hover');
      }
    }
  }

  bindEvents() {
    this.modalCloseBtn.addEventListener('click', this.closeModal);
    this.modalWrapper.addEventListener('click', this.closeModal);
    this.overlay.addEventListener('click', this.closeModal);
    this.overlay.addEventListener('mouseover', this.hoverCloseBtn.bind(this));
  }

  openModal() {
    document.body.append(this.overlay);
    document.body.style.overflow = 'hidden';
  }

  closeModal(e) {
    let classes = e.target.classList;
    if (
      classes.contains('overlay') ||
      classes.contains('modal__close-icon') ||
      classes.contains('modal-wrapper')
    ) {
      const overlay = document.querySelector('.overlay');
      if (overlay) {
        document.querySelector('.overlay').remove();
        document.body.style.overflow = 'auto';
      }
    }
  }
}

const getPetInfoHtml = (petInfo) => {
  const {
    id,
    name,
    img,
    type,
    breed,
    description,
    age,
    inoculations,
    diseases,
    parasites,
  } = petInfo;

  const template = `
  <div class="pet">
      <div class="pet__wrapper">
        <div class="pet__image">
          <img src="${img}" alt="${name}">
        </div>
        <div class="pet__info info">
          <h3 class="info__title">${name}</h3>
          <h4 class="info__subtitle">
            <span class="info__type">${type}</span> - <span class="info__breed">${breed}</span>
          </h4>
          <p class="info__description">${description}</p>
          <ul class="info__addition add-info">
            <li class="add-info__item">
              <span class="add-info__strong">Age:</span
              ><span class="add-info__info info__age">${age}</span>
            </li>
            <li class="add-info__item">
              <span class="add-info__strong">Inoculations:</span
              ><span class="add-info__info info__inoculations">${inoculations}</span>
            </li>
            <li class="add-info__item">
              <span class="add-info__strong">Diseases:</span
              ><span class="add-info__info info__diseases">${diseases}</span>
            </li>
            <li class="add-info__item">
              <span class="add-info__strong">Parasites:</span
              ><span class="add-info__info info__parasites">${parasites}</span>
            </li>
          </ul>
        </div>
      </div>
    </div>
  `;
  return template;
};

// Slider
const getSlidesPerPage = () => {
  const windowWidth = window.innerWidth;
  let slidesPerPage = 0;
  if (windowWidth > 1080) {
    slidesPerPage = 8;
  } else if (windowWidth >= 768) {
    slidesPerPage = 6;
  } else {
    slidesPerPage = 2;
  }
  return slidesPerPage;
};
const sort863 = (list) => {
  let unique8List = [];
  let length = list.length;
  for (let i = 0; i < length / 8; i++) {
    const uniqueStepList = [];
    for (j = 0; j < list.length; j++) {
      if (uniqueStepList.length >= 8) {
        break;
      }
      const isUnique = !uniqueStepList.some((item) => {
        return item.name === list[j].name;
      });
      if (isUnique) {
        uniqueStepList.push(list[j]);
        list.splice(j, 1);
        j--;
      }
    }
    unique8List = [...unique8List, ...uniqueStepList];
  }
  list = unique8List;

  list = sort6recursively(list);

  return list;
};

const sort6recursively = (list) => {
  const length = list.length;

  for (let i = 0; i < length / 6; i++) {
    const stepList = list.slice(i * 6, i * 6 + 6);

    for (let j = 0; j < 6; j++) {
      const duplicatedItem = stepList.find((item, ind) => {
        return item.name === stepList[j].name && ind !== j;
      });

      if (duplicatedItem !== undefined) {
        const ind = i * 6 + j;
        const which8OfList = Math.trunc(ind / 8);

        list.splice(which8OfList * 8, 0, list.splice(ind, 1)[0]);

        sort6recursively(list);
      }
    }
  }

  return list;
};
// Render Cards
let fullPetsList = [];
fullPetsList = (() => {
  let tempArr = [];

  for (let i = 0; i < 6; i++) {
    const newPets = pets;

    for (let j = pets.length; j > 0; j--) {
      let randInd = Math.floor(Math.random() * j);
      const randElem = newPets.splice(randInd, 1)[0];
      newPets.push(randElem);
    }

    tempArr = [...tempArr, ...newPets];
  }
  return tempArr;
})();

fullPetsList = sort863(fullPetsList);

const getPagesCount = (data) => {
  const width = window.innerWidth;
  if (width >= 1080) {
    return Math.trunc(data.length / 8);
  }
  if (width >= 768) {
    return Math.trunc(data.length / 6);
  }
  if (width < 768) {
    return Math.trunc(data.length / 2);
  }
};
const pageCount = getPagesCount(fullPetsList);

const changeBtn = (btn, classes, isActive = true) => {
  if (isActive) {
    btn.classList.remove('button--inactive');
    btn.querySelector('.icon').classList.add(`icon--${classes}`);
    btn.querySelector('.icon').classList.remove(`icon--${classes}-inactive`);
  } else {
    btn.classList.add('button--inactive');
    btn.querySelector('.icon').classList.remove(`icon--${classes}`);
    btn.querySelector('.icon').classList.add(`icon--${classes}-inactive`);
  }
};

const renderBtn = (btn, i, classes) => {
  btn.innerHTML += `<button
    class="button button--squared ${classes} pagination__button pagination__page"
  >
    ${i}
  </button>`;
};

const renderPagination = (current, pageCount) => {
  const pagination = document.querySelector('.pagination');
  const pagesButtons = document.querySelector('.pages-buttons');
  const paginationFirst = document.querySelector('.pagination__first');
  const paginationPrev = document.querySelector('.pagination__prev');
  const paginationNext = document.querySelector('.pagination__next');
  const paginationLast = document.querySelector('.pagination__last');
  const wrapper = document.querySelector('.wrapper');
  const wrapperWidth = wrapper.clientWidth;
  const marginLeft = parseInt(
    window.getComputedStyle(paginationNext).marginLeft
  );
  const paginationWidth = 4 * (paginationNext.clientWidth + marginLeft);
  const remainingSpace = wrapperWidth - paginationWidth;
  const remainingPages =
    Math.floor(remainingSpace / (paginationNext.clientWidth + marginLeft)) - 1;
  const pages = '';

  const windowWidth = window.innerWidth;

  pagesButtons.innerHTML = '';
  for (let i = 1; i < pageCount + 1; i++) {
    const classBtn = i === current ? 'button--filled' : '';
    if (windowWidth > 530) {
      if (remainingPages < pageCount + 1) {
        if (i === 1 || i === current || i === pageCount) {
          renderBtn(pagesButtons, i, classBtn);
        } else if (
          i === 2 &&
          current !== 2 &&
          current !== 1 &&
          pageCount !== 2
        ) {
          pagesButtons.innerHTML += '<span class="skipped">...</span>';
        } else if (i === pageCount - 1 && current !== pageCount - 1) {
          pagesButtons.innerHTML += '<span class="skipped">...</span>';
        }
      } else {
        renderBtn(pagesButtons, i, classBtn);
      }
    } else {
      if (i === current) {
        renderBtn(pagesButtons, i, classBtn);
      }
    }
  }
  const pageBtns = document.querySelectorAll('.pagination__page');
  pageBtns.forEach((btn) => {
    btn.addEventListener('click', (e) => {
      currentPage = +e.target.innerText - 1;
      renderPagination(currentPage + 1, pageCount);
      renderSlides(fullPetsList, currentPage);
    });
  });

  if (current === 1) {
    changeBtn(paginationFirst, 'first', false);
    changeBtn(paginationPrev, 'prev', false);
    changeBtn(paginationLast, 'last');
    changeBtn(paginationNext, 'next');
  } else if (current > 1 && current < pageCount) {
    changeBtn(paginationFirst, 'first');
    changeBtn(paginationPrev, 'prev');
    changeBtn(paginationLast, 'last');
    changeBtn(paginationNext, 'next');
  } else {
    changeBtn(paginationFirst, 'first');
    changeBtn(paginationPrev, 'prev');
    changeBtn(paginationLast, 'last', false);
    changeBtn(paginationNext, 'next', false);
  }
};

const windowWidth = window.screen.width;
const getSlideHtml = (data) => {
  const id = data.id;
  const name = data.name;
  const imgUrl = data.img;
  const template = `<div class="slider__item slide" data-id="${id}">
  <img
    src="${imgUrl}"
    alt="${name}"
    class="slide__image"
  />
  <h4 class="slide__title">${name}</h4>
  <button class="button">Learn more</button>
</div>`;
  return template;
};

const renderSlides = (data, currentPage) => {
  const slider = document.querySelector('.slider');
  const perPage = getSlidesPerPage();
  slider.innerHTML = '';
  for (
    let i = currentPage * perPage;
    i < currentPage * perPage + perPage;
    i++
  ) {
    const html = getSlideHtml(data[i]);
    slider.insertAdjacentHTML('beforeend', html);
  }

  document.querySelectorAll('.slider__item').forEach((slide) => {
    slide.addEventListener('click', (e) => {
      const sliderItem = e.target.closest('.slider__item');
      const id = sliderItem.getAttribute('data-id');
      const petInfo = pets[id - 1];
      const modalContent = getPetInfoHtml(petInfo);
      let modal = new Modal('slide-modal');
      modal.buildModal(modalContent);
    });
  });
};

let currentPage = 0;
document.querySelector('.pagination__prev').addEventListener('click', (e) => {
  if (currentPage > 0) {
    currentPage--;
  }
  renderPagination(currentPage + 1, pageCount);
  renderSlides(fullPetsList, currentPage);
});

document.querySelector('.pagination__next').addEventListener('click', (e) => {
  if (currentPage + 1 < pageCount) {
    currentPage++;
  }

  renderPagination(currentPage + 1, pageCount);
  renderSlides(fullPetsList, currentPage);
});

document.querySelector('.pagination__first').addEventListener('click', (e) => {
  currentPage = 0;

  renderPagination(currentPage + 1, pageCount);
  renderSlides(fullPetsList, currentPage);
});

document.querySelector('.pagination__last').addEventListener('click', (e) => {
  currentPage = pageCount - 1;
  renderPagination(currentPage + 1, pageCount);
  renderSlides(fullPetsList, currentPage);
});

renderPagination(currentPage + 1, pageCount);
renderSlides(fullPetsList, currentPage);
