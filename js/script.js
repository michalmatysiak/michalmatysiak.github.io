const menuIcon = document.querySelector('.nav-icon');
const menuLinks = document.querySelector('.nav-links');
const nav = document.querySelector('nav');
const introduction = document.querySelector('.container');
const arrow = document.querySelector('.arrow-box');

let toggleMenu = () => {
  introduction.classList.toggle('hide');
  arrow.classList.toggle('hide');
  menuIcon.classList.toggle('open');
  menuLinks.classList.toggle('show-links');
  nav.classList.toggle('nav-collapse');
};

menuIcon.addEventListener('click', toggleMenu);
menuLinks.addEventListener('click', toggleMenu);