function animateElement(element, method, callback) {
  console.log('animate', element, 'method', method, 'when done do:', callback);
  var node = element;
  if (typeof element === 'string') {
    node = document.querySelector(element);
  }
  node.classList.add('animated', ...method);
  function handleAnimationEnd() {
    node.classList.remove('animated', method);
    node.removeEventListener('animationed', handleAnimationEnd);

    if (typeof callback === 'function') callback();
  }
  node.addEventListener('animationend', handleAnimationEnd);
}

animateElement('.section--intro .js-animate', ['bounce']);
