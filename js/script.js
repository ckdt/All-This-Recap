import {CountUp} from './countup.min.js';

new fullpage('#fullpage', {
  licenseKey: 'D62A0CA5-A6F748B1-AADF056F-D8133285',
  navigation: true,
  sectionsColor: [
    '#29313E',
    '#DAE1D9',
    '#010fff',
    '#506171',
    '#FAF3ED',
    '#29313E',
    '#DAE1D9',
    '#ff00ff'
  ],
  anchors: [
    'intro',
    'summary',
    'industries',
    'locations',
    'projects',
    'testimonials',
    'time',
    'tmp'
  ],
  afterRender: function() {
    animateElement('.js-animate-start', 'bounce');
  },
  onLeave: function(origin, section, direction) {
    console.log('from', origin.index, 'to', section.index);

    /* slide 2 */
    if (origin.index == 0 && section.index == 1) {
      console.log('Slide 2');
      countProjects();
    }
    /* slide 3 */
    if (origin.index == 1 && section.index == 2) {
      console.log('Slide 3');

      document.querySelectorAll('.js-animate-li').forEach(el => {
        animateElement(el, 'fadeInLeft');
        console.log(`Element ${el.tagName} with ID #${el.id} says: ${el.textContent}`);
      });
    }
    /* slide 4 */
    if (origin.index == 2 && section.index == 3) {
      console.log('Slide 4');
    }
    /* slide 5 */
    if (origin.index == 3 && section.index == 4) {
      console.log('Slide 5');
    }
    /* slide 6 */
    if (origin.index == 4 && section.index == 5) {
      console.log('Slide 6');
    }
    /* slide 7 */
    if (origin.index == 5 && section.index == 6) {
      console.log('Slide 7');
    }
    /* slide 8 */
    if (origin.index == 6 && section.index == 7) {
      console.log('Slide 8');
    }
    /* slide 9 */
    if (origin.index == 7 && section.index == 8) {
      console.log('Slide 9');
    }
    /* slide 10 */
    if (origin.index == 8 && section.index == 9) {
      console.log('Slide 10');
    }
  }
});

function animateElement(element, method, callback) {
  console.log('animate', element, 'method', method, 'when done do:', callback);
  var node = element;
  if (typeof element === 'string') {
    node = document.querySelector(element);
  }
  node.classList.add('animated', method);
  function handleAnimationEnd() {
    node.classList.remove('animated', method);
    node.removeEventListener('animationed', handleAnimationEnd);

    if (typeof callback === 'function') callback();
  }
  node.addEventListener('animationend', handleAnimationEnd);
}

function countProjects() {
  var countID = setInterval(
    function(e) {
      const counter = document.querySelector('.js-animate-counter');
      const options = {
        startVal: 0,
        duration: 5
      };
      let display = new CountUp(counter, 28, options);
      if (!display.error) {
        display.start();
      } else {
        console.error(display.error);
      }
      clearInterval(countID);
    },
    1000,
    this
  );
}

/* 
COLORS
#29313E 

#DAE1D9;
#AFC6B6;
#FAF3ED;
#29313E;
#A17035;
#EEDAD3;
#506171;


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

/*
// init fullpage
new fullpage('#fullpage', {
 
  
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
*/
