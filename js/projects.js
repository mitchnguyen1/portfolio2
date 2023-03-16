gsap.registerPlugin(ScrollTrigger);

//Carousel for cards

//define the current card 1-3
//if curr == 2
  //prev == 1, 2, 3 to right
  //next == 1,2,3 to left
//else if curr == 1
  //prev == null
  //next == 1,2,3 to left 
//else if curr == 3
  //prev == 1,2,3 to right
  //next == null
