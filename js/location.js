const images = [
  'img/location/k1.jpg',
  'img/location/k2.jpg',
  'img/location/k0.jpg',
  'img/location/k3.jpg',
  'img/location/k4.jpg',
  'img/location/k5.jpg',
  'img/location/k6.jpg',
  'img/location/k7.jpg',
  'img/location/k8.jpg',
  'img/location/k9.jpg',
  'img/location/k10.jpg',
  'img/location/k11.jpg',
  'img/location/k12.jpg',
  'img/location/k13.jpg',
  'img/location/k14.jpg',
  'img/location/k15.jpg',
  'img/location/k16.jpg',
  'img/location/k17.jpg',
  'img/location/k18.jpg',
  'img/location/k19.jpg',
  'img/location/k20.jpg',
  'img/location/k21.jpg',
  'img/location/k22.jpg',
  'img/location/k23.jpg',
  'img/location/k24.jpg',
  'img/location/k25.jpg',
  'img/location/k26.jpg',
  'img/location/k27.jpg',
  'img/location/k28.jpg'
];

let i = 0;
const canvas = document.querySelector('.section--locations .js-drawcanvas');

function placeImage(x, y) {
  const nextImage = images[i];
  const img = document.createElement('img');
  img.setAttribute('src', nextImage);
  img.setAttribute('class', 'js-img');
  img.style.left = x + 'px';
  img.style.top = y + 'px';
  img.style.transform =
    'translate(-50%, -50%) scale(0.5) rotate(' + (Math.random() * 20 - 10) + 'deg)';

  canvas.appendChild(img);

  i++;
  if (i >= images.length) {
    i = 0;
  }
}

canvas.addEventListener('click', function(e) {
  e.preventDefault();
  placeImage(e.pageX, e.pageY);
});

canvas.addEventListener('touchend', function(e) {
  e.preventDefault();
  placeImage(e.pageX, e.pageY);
});

const resetButton = document.querySelector('.section--locations .js-reset');
resetButton.addEventListener('click', function(e) {
  e.preventDefault();
  canvas.innerHTML = '';
});
