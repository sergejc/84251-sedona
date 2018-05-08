var toggleButton = document.querySelector('.main-nav__toggle');
var menu = document.querySelector('.main-nav__list');

document.body.classList.remove('no-js');

toggleButton.addEventListener('click', function(e){
  this.classList.toggle('main-nav__toggle-open');
  menu.classList.toggle('main-nav__list--open');
});
