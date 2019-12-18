/* Modules */
import {CountUp} from './countup.min.js';

new fullpage('#app', {
  menu: '#menu',
  lockAnchors: false,
  anchors: [
    'intro',
    'summary',
    'industries',
    'locations',
    'projects',
    'quote',
    'time',
    'clients',
    'thanks',
    'outro'
  ],
  navigation: true,
  navigationPosition: 'right',
  navigationTooltips: [
    'intro',
    'summary',
    'industries',
    'locations',
    'projects',
    'quote',
    'time',
    'clients',
    'thanks',
    'outro'
  ],
  showActiveTooltip: false,
  slidesNavigation: false,
  slidesNavPosition: 'bottom',

  //Scrolling
  css3: true,
  scrollingSpeed: 600,
  autoScrolling: true,
  fitToSection: true,
  fitToSectionDelay: 1000,
  scrollBar: false,
  easing: 'easeInOutCubic',
  easingcss3: 'ease',
  loopBottom: false,
  loopTop: false,
  loopHorizontal: true,
  continuousVertical: false,
  continuousHorizontal: false,
  scrollHorizontally: false,
  interlockedSlides: false,
  dragAndMove: false,
  offsetSections: false,
  resetSliders: false,
  fadingEffect: false,
  normalScrollElements: '',
  scrollOverflow: false,
  scrollOverflowReset: false,
  scrollOverflowOptions: null,
  touchSensitivity: 15,
  bigSectionsDestination: null,

  //Accessibility
  keyboardScrolling: true,
  animateAnchor: true,
  recordHistory: true,

  //Design
  controlArrows: true,
  verticalCentered: false,
  sectionsColor: [
    '#010fff',
    '#fff010',
    '#009669',
    '#fff',
    '#010fff',
    '#fff010',
    '#009669',
    '#222',
    '#fff',
    '#010fff'
  ],
  paddingTop: '0',
  paddingBottom: '0',
  fixedElements: '',
  responsiveWidth: 0,
  responsiveHeight: 0,
  responsiveSlides: false,
  parallax: false,
  parallaxOptions: {type: 'reveal', percentage: 62, property: 'translate'},
  cards: false,
  cardsOptions: {perspective: 100, fadeContent: true, fadeBackground: true},

  //Custom selectors
  sectionSelector: '.section',
  slideSelector: '.slide',

  lazyLoading: true,

  //Licence
  licenseKey: 'D62A0CA5-A6F748B1-AADF056F-D8133285',

  //events
  onLeave: function(origin, destination, direction) {
    if (destination.index == 0) {
      console.log('intro');
    }
    if (destination.index == 1) {
      console.log('summary');
      countProjects();
    }
    if (destination.index == 2) {
      console.log('industries');
      animateIndustries();
    }
    if (destination.index == 3) {
      console.log('locations');
    }
    if (destination.index == 4) {
      console.log('projects');
    }
    if (destination.index == 5) {
      console.log('quote');
      animateQuote();
    }
    if (destination.index == 6) {
      console.log('time');
      animateGraph();
    }
    if (destination.index == 7) {
      console.log('clients');
    }
    if (destination.index == 8) {
      console.log('thanks');
    }
    if (destination.index == 9) {
      console.log('outro');
    }
    resetDefaults();
    console.log(origin.index, destination.index, direction);
  },
  afterLoad: function(origin, destination, direction) {
    fitMarquee();
  },
  afterRender: function() {},
  afterResize: function(width, height) {},
  afterReBuild: function() {},
  afterResponsive: function(isResponsive) {},
  afterSlideLoad: function(section, origin, destination, direction) {},
  onSlideLeave: function(section, origin, destination, direction) {}
});

function countProjects() {
  var countID = setInterval(
    function(e) {
      const counter = document.querySelector('.js-animate-counter');
      const options = {
        useEasing: false,
        startVal: 0,
        duration: 3
      };
      let display = new CountUp(counter, 28, options);
      if (!display.error) {
        display.start(counterDoneAnimation);
      } else {
        console.error(display.error);
      }
      clearInterval(countID);
    },
    1000,
    this
  );
}

function counterDoneAnimation() {
  animateElement('.js-animate-counter', ['bounce', 'filled']);
  const pyro = document.querySelector('.js-pyro');
  pyro.classList.add('pyro');
}

function animateIndustries() {
  document.querySelectorAll('.section--industries .js-animate-li').forEach(el => {
    animateElement(el, ['fadeInLeft']);
  });
}

function animateQuote() {
  animateElement('.js-animate-quote', ['flash']);
}

function animateGraph() {
  document.querySelectorAll('.section--time .bar').forEach(el => {
    animateElement(el, ['fadeInUpBig']);
  });
}

function resetDefaults() {
  resetCount();
}

function resetCount() {
  const counter = document.querySelector('.js-animate-counter');
  counter.innerHTML = '0';
  counter.classList.remove('filled', 'bounce', 'animated');
  const pyro = document.querySelector('.js-pyro');
  pyro.classList.remove('pyro');
}

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

function fitMarquee() {
  const marquee = document.querySelector('.section--marquee');
  const single = document.querySelector('.marquee--line__one');
  marquee.style.width = single.offsetWidth + 'px';
  console.log(marquee, single, marquee.style.width, single.offsetWidth);
}
