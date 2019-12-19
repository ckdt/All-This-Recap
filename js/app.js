/* Modules */
import {CountUp} from './countup.min.js';
import {AnimateElement} from './animation.js';
import {TinderCards} from './tinder.js';

/* Fullpage JS */
new fullpage('#app', {
  menu: '#menu',
  lockAnchors: false,
  anchors: [
    'intro',
    'summary',
    'industries',
    'time',
    'locations',
    'projects',
    'quote',
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
    'time',
    'locations',
    'projects',
    'quote',
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
    '#010fff',
    '#fff010',
    '#fff010',
    '#ffffff',
    '#010fff',
    '#ffffff',
    '#010fff',
    '#ffffff',
    '#ffffff'
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
      onEnterIntro();
    }
    if (destination.index == 1) {
      onEnterSummary();
    }
    if (destination.index == 2) {
      onEnterIndustries();
    }
    if (destination.index == 3) {
      onEnterTime();
    }
    if (destination.index == 4) {
      onEnterLocations();
    }
    if (destination.index == 5) {
      onEnterProjects();
    }
    if (destination.index == 6) {
      onEnterQuote();
    }
    if (destination.index == 7) {
      onEnterClients();
    }
    if (destination.index == 8) {
      onEnterThanks();
    }
    if (destination.index == 9) {
      onEnterOutro();
    }
    resetDefaults();
    console.log(origin.index, destination.index, direction);
  },
  afterLoad: function(origin, destination, direction) {
    onLoadStage();
  },
  afterRender: function() {},
  afterResize: function(width, height) {},
  afterReBuild: function() {},
  afterResponsive: function(isResponsive) {},
  afterSlideLoad: function(section, origin, destination, direction) {},
  onSlideLeave: function(section, origin, destination, direction) {}
});


/* Custom onEnterFunctions */
function onLoadStage(){
  console.log('init');
  // resize marque tag
  fitMarquee();
}
function onEnterIntro(){
  console.log('intro');
}
function onEnterSummary(){
  console.log('summary');
  // start Counter
  startCounter();
}
function onEnterIndustries(){
  console.log('industries');
  // Animate listitems
  const listItems = document.querySelectorAll('.section--industries .js-animate-li');
  listItems.forEach(el => {
    AnimateElement(el, ['fadeInLeft']);
  });
}
function onEnterTime(){
  console.log('time');
  const graphItems = document.querySelectorAll('.section--time .bar');
  graphItems.forEach(el => {
    AnimateElement(el, ['fadeInUpBig']);
  });
}
function onEnterLocations(){
  console.log('locations');
  AnimateElement('.location--rotterdam',['whobble','infinite']);
}
function onEnterProjects(){
  console.log('projects');
  TinderCards();
}
function onEnterQuote(){
  console.log('quote');
  // Animate quote
  AnimateElement('.js-animate-quote', ['flash']);
}
function onEnterClients(){
  console.log('clients');
}
function onEnterThanks(){
  console.log('thanks');
}
function onEnterOutro(){
  console.log('outro');
}


/* Util functions */
function fitMarquee() {
  const marquee = document.querySelector('.section--marquee');
  const single = document.querySelector('.marquee--line__one');
  marquee.style.width = single.offsetWidth + 'px';
}

function startCounter(){
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
        display.start(onCounterEnd);
      } else {
        console.error(display.error);
      }
      clearInterval(countID);
    },
    1000,
    this
  );
}

function resetCounter(){
  const counter = document.querySelector('.js-animate-counter');
  counter.innerHTML = '0';
  counter.classList.remove('filled', 'bounce', 'animated');
}

function onCounterEnd(){
  AnimateElement('.js-animate-counter', ['bounce', 'filled']);
}

/* Reset Stage */
function resetDefaults() {
  resetCounter();
}