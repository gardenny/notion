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
