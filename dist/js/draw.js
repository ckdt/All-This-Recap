var aniFrame;

function initCanvas() {
  const canvas = document.querySelector('#drawingboard');

  canvas.width = window.innerWidth * 2;
  canvas.height = window.innerHeight * 2;

  canvas.style.width = window.innerWidth + 'px';
  canvas.style.height = window.innerHeight + 'px';

  const context = canvas.getContext('2d');
  context.scale(2, 2);

  let aimX = null;
  let aimY = null;
  let currentX = null;
  let currentY = null;

  let i = 0;
  const images = ['img/at-logo.png', 'img/at-2019.png', 'img/at-more.png'].map(src => {
    const image = document.createElement('img');
    image.src = src;
    return image;
  });

  document.addEventListener('mousemove', function(e) {
    aimX = e.pageX;
    aimY = e.pageY;
    if (currentX === null) {
      currentX = e.pageX;
      currentY = e.pageY;
    }
  });

  canvas.addEventListener('click', function(e) {
    i = i + 1;
    if (i >= images.length) {
      i = 0;
    }
  });

  const draw = function() {
    if (currentX) {
      if (images[i].complete) {
        context.drawImage(images[i], currentX - 122, currentY - 35, 243, 70);
      }
      currentX = currentX + (aimX - currentX) * 0.1;
      currentY = currentY + (aimY - currentY) * 0.1;
    }

    aniFrame = requestAnimationFrame(draw);
  };

  const resetButton = document.querySelector('.section--intro .js-reset');
  resetButton.addEventListener('click', function(e) {
    console.log(context);
    e.preventDefault();
    resetCanvas(context);
  });
  draw();
}

function resetCanvas(el) {
  cancelAnimationFrame(aniFrame);
  el.clearRect(0, 0, window.innerWidth * 2, window.innerHeight * 2);
  restartCanvas();
}
function restartCanvas() {
  var countID = setInterval(
    function(e) {
      initCanvas();
      console.log(countID);
      clearInterval(countID);
    },
    3000,
    this
  );
}
initCanvas();
