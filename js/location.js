const images = [
  'img/location/a0.jpg',
  'img/location/a1.jpg',
  'img/location/a2.jpg',
  'img/location/a3.jpg',
  'img/location/a4.jpg',
  'img/location/a5.jpg',
  'img/location/a6.jpg',
  'img/location/a7.jpg',
  'img/location/a8.jpg',
  'img/location/a9.jpg',
  'img/location/a10.jpg',
  'img/location/a11.jpg',
  'img/location/a12.jpg',
  'img/location/a13.jpg',
  'img/location/a14.jpg',
  'img/location/a15.jpg',
  'img/location/a16.jpg',
  'img/location/a17.jpg',
  'img/location/a18.jpg',
  'img/location/a19.jpg',
  'img/location/a20.jpg',
  'img/location/k0.jpg',
  'img/location/k1.jpg',
  'img/location/k2.jpg',
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
  'img/location/k28.jpg',
  'img/location/r0.jpg',
  'img/location/r1.jpg',
  'img/location/r2.jpg',
  'img/location/r3.jpg',
  'img/location/r4.jpg',
  'img/location/r5.jpg',
  'img/location/r6.jpg',
  'img/location/r7.jpg',
  'img/location/r8.jpg',
  'img/location/r9.jpg',
  'img/location/r10.jpg',
  'img/location/r11.jpg',
  'img/location/r12.jpg',
  'img/location/r13.jpg',
  'img/location/r14.jpg',
  'img/location/r15.jpg',
  'img/location/r16.jpg',
  'img/location/r17.jpg',
  'img/location/r18.jpg',
  'img/location/r19.jpg',
  'img/location/r20.jpg',
  'img/location/r21.jpg',
  'img/location/r22.jpg',
  'img/location/r23.jpg',
  'img/location/r24.jpg',
  'img/location/r25.jpg'
];

function shuffle(array) {
  var currentIndex = array.length,
    temporaryValue,
    randomIndex;

  // While there remain elements to shuffle...
  while (0 !== currentIndex) {
    // Pick a remaining element...
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex -= 1;

    // And swap it with the current element.
    temporaryValue = array[currentIndex];
    array[currentIndex] = array[randomIndex];
    array[randomIndex] = temporaryValue;
  }

  return array;
}

let shuffledImages = shuffle(images);

let i = 0;
const canvas = document.querySelector('.section--locations .js-drawcanvas');

function placeImage(x, y) {
  const nextImage = shuffledImages[i];
  const img = document.createElement('img');
  img.setAttribute('src', nextImage);
  img.setAttribute('class', 'js-img');
  img.style.left = x + 'px';
  img.style.top = y + 'px';
  img.style.transform =
    'translate(-50%, -50%) scale(0.5) rotate(' + (Math.random() * 20 - 10) + 'deg)';

  canvas.appendChild(img);

  i++;
  if (i >= shuffledImages.length) {
    i = 0;
  }
}

var clientX, clientY;

canvas.addEventListener('click', function(e) {
  e.preventDefault();
  placeImage(e.pageX, e.pageY);
  console.log('click', e.pageX, e.pageY);
});

canvas.addEventListener('touchstart', function(e) {
  e.preventDefault();
  clientX = Math.floor(e.touches[0].clientX);
  clientY = Math.floor(e.touches[0].clientY);
  console.log('click', clientX, clientY);
});

canvas.addEventListener('touchend', function(e) {
  e.preventDefault();
  placeImage(clientX, clientY);
});

const resetButton = document.querySelector('.section--locations .js-reset');
resetButton.addEventListener('click', function(e) {
  e.preventDefault();
  canvas.innerHTML = '';
});
