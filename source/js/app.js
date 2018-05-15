var toggleButton = document.querySelector('.main-nav__toggle');
var menu = document.querySelector('.main-nav__list');

document.body.classList.remove('no-js');

toggleButton.addEventListener('click', function(e){
  this.classList.toggle('main-nav__toggle--open');
  menu.classList.toggle('main-nav__list--open');
});

function initMap() {
  var uluru = {lat: 34.7858293, lng: -111.8954255};
  var map = new google.maps.Map(document.querySelector('.map'), {
    zoom: 9,
    center: uluru
  });
  var marker = new google.maps.Marker({
    position: uluru,
    map: map,
    icon: "img/icon-map-marker.svg"
  });
}
