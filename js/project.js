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
