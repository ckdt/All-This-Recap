import {CountUp} from './countup.min.js';

// set animate vars
function animateCSS(element, animationName, callback) {
  console.log(typeof element);
  var node = element;

  if (typeof element === 'string') {
    node = document.querySelector(element);
  }

  node.classList.add('animated', animationName);

  function handleAnimationEnd() {
    node.classList.remove('animated', animationName);
    node.removeEventListener('animationend', handleAnimationEnd);

    if (typeof callback === 'function') callback();
  }

  node.addEventListener('animationend', handleAnimationEnd);
}

/* addClass */
function addClass(element, className) {
  const node = document.querySelector(element);
  if (!node.classList.contains(className)) {
    node.classList.add(className);
    return true;
  }
  return false;
}

/* removeClass */
function removeClass(element, className) {
  const node = document.querySelector(element);
  if (node.classList.contains(className)) {
    if (typeof className === 'string') node.classList.remove(className);
    return true;
  }
  return false;
}

// init fullpage
new fullpage('#fullpage', {
  licenseKey: 'D62A0CA5-A6F748B1-AADF056F-D8133285',
  navigation: true,
  sectionsColor: ['#29313E', '#DAE1D9', '#010fff', '#506171', '#FAF3ED', '#29313E', '#DAE1D9', '#ff00ff'],
  anchors: ['intro', 'summary', 'industries', 'locations', 'projects', 'testimonials', 'time', 'superhi'],
  normalScrollElements: '.grid--cards',
  onLeave: function(origin, section, direction) {
    // remove all ".animated"
    // resetAnimation();
    console.log('from', origin.index, 'to', section.index);

    if (origin.index == 0 && section.index == 1) {
      animateCSS('.section--two .XXL', 'fadeInUpBig');

      var int = setInterval(startCounter, 1000, this);
      function startCounter(e) {
        const counter = document.querySelector('.js-animate-counter');
        const options = {
          startVal: 0,
          duration: 5
        };

        let demo = new CountUp(counter, 28, options);
        if (!demo.error) {
          demo.start();
        } else {
          console.error(demo.error);
        }
        console.log('clear', e);
        clearInterval(int);
      }
    }
    if (origin.index == 1 && section.index == 2) {
      document.querySelectorAll('.section--three .list-item').forEach(el => {
        animateCSS(el, 'fadeInLeft');
        console.log(`Element ${el.tagName} with ID #${el.id} says: ${el.textContent}`);
      });
    }
    if (origin.index == 2 && section.index == 3) {
      //animateCSS('.section--four .XXL', 'fadeInUpBig');
    }
    if (origin.index == 3 && section.index == 4) {
      //animateCSS('.section--five .XXL', 'fadeInUpBig');
    }
    if (origin.index == 4 && section.index == 5) {
      //animateCSS('.section--six .XXL', 'fadeInUpBig');
    }
    if (origin.index == 5 && section.index == 6) {
      document.querySelectorAll('.section--seven .bar').forEach(el => {
        animateCSS(el, 'fadeInUpBig');
        console.log(`Element ${el.tagName} with ID #${el.id} says: ${el.textContent}`);
      });

      //animateCSS('.section--seven .XXL', 'fadeInUpBig');
    }
  }
});
