
//Project Carousel
const prevButton = document.querySelector('.prev');
const nextButton = document.querySelector('.next');
const projectContent = document.querySelector('.projectcontent');
const card1 = document.querySelector('#card1');
const card2 = document.querySelector('#card2');
const card3 = document.querySelector('#card3');

let curr = 2;

function updateButtons() {
  if (curr == 1) {
    prevButton.disabled = true;
    nextButton.disabled = false;
  } else if (curr == 2) {
    prevButton.disabled = false;
    nextButton.disabled = false;
  } else if (curr == 3) {
    prevButton.disabled = false;
    nextButton.disabled = true;
  }
}

function animateCarousel(direction) {
  const moveDistance = direction === 'left' ? -75 : 75;
  gsap.to([card1, card2, card3], {
    duration: 0.5,
    x: `+=${moveDistance}rem`,
    ease: 'power2.out',
  });
}

prevButton.addEventListener('click', () => {
  if (curr == 2) {
    animateCarousel('right');
    curr = 1;
  } else if (curr == 3) {
    animateCarousel('right');
    curr = 2;
  }
  updateButtons();
});

nextButton.addEventListener('click', () => {
  if (curr == 1) {
    animateCarousel('left');
    curr = 2;
  } else if (curr == 2) {
    animateCarousel('left');
    curr = 3;
  }
  updateButtons();
});

updateButtons();


  //project bubbles
  var tlproject = gsap.timeline({
    scrollTrigger: {
    trigger: "#projects",
    scrub: true,
    pin: true,
    start: "top top",
    end: "+=100%"
    }
    });
    
    tlproject.fromTo(".circle1", {x: -300, y: -500, autoAlpha: 0}, {x: -400, y: -175, autoAlpha: 1, duration: 1},0)
    .fromTo(".circle2", {x: 1500, y:-200, autoAlpha: 0}, {x: 800, autoAlpha: 0, duration: 1},0)
    .fromTo(".circle3", {x: -1500, autoAlpha: 0}, {x: -900, y: 100, autoAlpha: 1, duration: 1},0)
    .fromTo(".circle4", {x: 2000,y:1000, autoAlpha: 0}, {x:850,y:400, autoAlpha: 1, duration: 1},0)
    .fromTo(".circle5", {x: -1000,y:2000, autoAlpha: 0}, {x: 200,y:350, autoAlpha: 1, duration: 1},0)
    .fromTo(".circle6", {x:100,y:-400, autoAlpha: 0}, {x: 250,y:-100, autoAlpha: 1, duration: 1},0)
  
  