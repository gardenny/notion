'use strict';

window.addEventListener('load', () => AOS.init({ duration: 1000 }));

// Make scroll header & navbar
const header = document.querySelector('header');
const headerHeight = header.offsetHeight;
const navbarMenu = document.querySelector('.navbar_menu');

document.addEventListener('scroll', () => {
  if (window.scrollY > headerHeight) {
    header.classList.add('scrollHeader');
    if (window.innerWidth <= 768) {
      navbar.classList.add('scrollNav');
    }
  } else {
    header.classList.remove('scrollHeader');
    if (window.innerWidth <= 768) {
      navbar.classList.remove('scrollNav');
    }
  }
});

// Make scrollIntoView function
function scrollIntoView(selector) {
  const scrollTo = document.querySelector(selector); // selector를 변수에 동적으로 할당
  scrollTo.scrollIntoView({ behavior: 'smooth' });
}

// Remove all class 'on'
function removeClass() {
  hamBtn.classList.remove('on');
  navbarMenu.classList.remove('on');
  dark.classList.remove('on');
}

// Scroll into section
navbarMenu.addEventListener('click', event => {
  const target = event.target;
  const link = target.dataset.link;
  if (link == null) return; // if link value is null, function exit
  scrollIntoView(link);
  removeClass();
});

// Make when home scrolled transparency
const homeInner = document.querySelector('#home .inner');
const homeHeight = home.offsetHeight;
document.addEventListener('scroll', () => {
  homeInner.style.opacity = 1 - window.scrollY / homeHeight;
  // opacity (0 : transparent, 1 : untransparent)
});

// Show usage filtering
const albumCategory = document.querySelector('.uses_album_categories');
const albumPhoto = document.querySelector('.uses_album_photo img');
albumCategory.addEventListener('click', e => {
  const target = e.target.nodeName === 'LI' ? e.target : e.target.parentNode;
  const order = target.dataset.order;
  if (target.nodeName === 'LI') albumPhoto.setAttribute('src', `img/uses/uses_photo${order}.webp`);
  else return;
});

// Make template swiper
let swiper = new Swiper('.mySwiper', {
  spaceBetween: 30,
  centeredSlides: true,
  loop: true,
  autoplay: {
    delay: 2000,
    disableOnInteraction: false,
  },
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
});

// Show arrow up btn when scrolling
const btnArrowUp = document.querySelector('.btn_arrow');
document.addEventListener('scroll', () => {
  if (window.scrollY > homeHeight / 2) btnArrowUp.classList.add('show');
  else btnArrowUp.classList.remove('show');
});

// Click arrow up btn scrollIntoView #home
btnArrowUp.addEventListener('click', () => {
  window.scrollTo({ top: 0, left: 0, behavior: 'smooth' });
  removeClass();
});

// Make ham rotate
// Make navbar & dark toggle
const hamBtn = document.querySelector('.btn_ham');
const dark = document.querySelector('.background_dark');
hamBtn.addEventListener('click', e => {
  e.currentTarget.classList.toggle('on');
  navbarMenu.classList.toggle('on');
  dark.classList.toggle('on');
});
dark.addEventListener('click', () => {
  removeClass();
});

// Reset when window resized
window.addEventListener('resize', () => {
  navbar.classList.remove('scrollNav');
  removeClass();
});
