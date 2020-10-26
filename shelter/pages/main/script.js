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

// Render Cards
const windowWidth = window.screen.width;
const getSlideHtml = (data) => {
  const id = data.id;
  const name = data.name;
  const imgUrl = data.img;
  const template = `<div class="slider__item" data-id="${id}">
  <img
    src="${imgUrl}"
    alt="${name}"
    class="slider__image"
  />
  <h4 class="slider__title">${name}</h4>
  <div class="slider__button button">Learn more</div>
</div>`;
  return template;
};

const renderSlidesByScreenWidth = (data, width) => {
  const container = document.querySelector('.slides');
  let countObjects = 0;
  if (width > 1024) {
    countObjects = 3;
  } else if (width > 768) {
    countObjects = 2;
  } else {
    countObjects = 1;
  }
  for (let i = 0; i < data.length && i < countObjects; i++) {
    const petObject = data[i];
    const petHtml = getSlideHtml(petObject);
    container.insertAdjacentHTML('beforeend', petHtml);
  }
};

renderSlidesByScreenWidth(pets, windowWidth);

// Popup
class Modal {
  constructor(classes) {
    this.classes = classes;
    this.modal = '';
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
      'span',
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
    this.modal.append(this.modalCloseBtn);
    this.modal.append(this.modalContent);
    this.overlay.append(this.modal);
  }

  bindEvents() {
    this.modalCloseBtn.addEventListener('click', this.closeModal);
    this.overlay.addEventListener('click', this.closeModal);
  }

  openModal() {
    document.body.append(this.overlay);
  }

  closeModal(e) {
    let classes = e.target.classList;
    if (classes.contains('overlay') || classes.contains('modal__close-icon')) {
      const overlay = document.querySelector('.overlay');
      if (overlay) {
        document.querySelector('.overlay').remove();
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
