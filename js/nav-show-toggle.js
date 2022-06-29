//This Code Controls The opening and closing of the navigation menu
let navMenu = document.querySelector('nav');
let navBtn = document.querySelector('.nav-button');
let menuCloseBtn = document.querySelector('.close-menu-btn');
let navListLink = document.querySelectorAll(
  'nav a, nav [tabindex]',
);

navBtn.addEventListener('click', (e) => {
  navMenu.classList.add('menu-opened');
});
menuCloseBtn.addEventListener('click', (e) => {
  navMenu.classList.remove('menu-opened');
});

navBtn.addEventListener('keydown', (e) => {
  if (e.keyCode == 13) {
    navBtn.click();
  }
});

menuCloseBtn.addEventListener('keydown', (e) => {
  if (e.keyCode == 13) {
    menuCloseBtn.click();
  }
});

navListLink.forEach((element) => {
  element.addEventListener('focus', (e) => {
    navBtn.click();
  });

  element.addEventListener('blur', () => {
    menuCloseBtn.click();
  });
});
