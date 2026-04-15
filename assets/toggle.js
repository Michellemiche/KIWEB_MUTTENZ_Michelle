let datenSection = document.querySelector('.project__content');
let button = document.querySelector('.project__button');
let isShow = false;

function toggleDaten() {
  datenSection.classList.toggle('active');
  button.classList.toggle('open');
}