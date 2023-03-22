gsap.registerPlugin(ScrollTrigger, ScrollToPlugin);

const box = document.querySelector(".box2");
let about = document.querySelector("#about")
let close = document.querySelector(".close-box")

// Add smooth scroll animation to the button
const scrollButton = document.querySelector(".button");
scrollButton.addEventListener("click", function() {
  gsap.to(window, {duration: 1, scrollTo: {y: "#projects", offsetY: 50}});
});

//about section curtains
var tlAbout = gsap.timeline({
  scrollTrigger: {
    trigger: "#about",
    scrub: 2,
    pin: true,
    start: "top top",
    end: "+=100%"
  }
});

tlAbout.fromTo(
  [about],
  {
    clipPath: "circle(0% at 49.6% 15%)",
    opacity: 0,
    duration: 2,
    ease: "sine.inOut"
  },
  {
    clipPath: "circle(75% at 50% 50%)",
    opacity: 1,
    duration: 2,
    ease: "sine.inOut"
  },
  "-=1.3"
)
.from(
  ".bold",
  {
    autoAlpha: 0,
    duration: 1.5,
    stagger: 0.2,
    ease: "sine.inOut",
  },
  "-=1.4" // stagger the bold animation after the other elements
)
.from(
  ["#flower", "#laptop"],
  {
    autoAlpha: 1,
    duration: 1.5,
    stagger: 0.2,
    ease: "sine.inOut",
    y: 500,
  }
)
.from(".button", {
  y: 100,
  opacity: 0,
  ease: "elastic.out(2,1.5)",
  duration: 1
});

//skills cards movement
var tlCard = gsap.timeline({
    scrollTrigger: {
      trigger: "#skills",
      scrub: true,
      pin: true,
      start: "top top",
      end: "+=100%"
    }
});

tlCard.fromTo("#java", {y: -500, autoAlpha: 0}, {y: 0, autoAlpha: 1, duration: 2})
  .fromTo("#boot", {x: -500, autoAlpha: 0}, {x: 0, autoAlpha: 1, duration: 2}, 0)
  .fromTo("#spring", {y: 500, autoAlpha: 0}, {y: 0, autoAlpha: 1, duration: 2},0)
  .fromTo("#javascript", {y: -500, autoAlpha: 0}, {y: 0, autoAlpha: 1, duration: 2},0)
  .fromTo("#gsap", {y: 500, autoAlpha: 0}, {y: 0, autoAlpha: 1, duration: 2}, 0)
  .fromTo("#mysql", {x: 500, autoAlpha: 0}, {x: 0, autoAlpha: 1, duration: 2}, 0);
  tlCard.fromTo("#python", {y: -500, autoAlpha: 0}, {y: 0, autoAlpha: 1, duration: 2},1)
  .fromTo("#css", {x: -500, autoAlpha: 0}, {x: 0, autoAlpha: 1, duration: 2}, 1)
  .fromTo("#docker", {y: 500, autoAlpha: 0}, {y: 0, autoAlpha: 1, duration: 2},1)
  .fromTo("#html", {y: -500, autoAlpha: 0}, {y: 0, autoAlpha: 1, duration: 2},1)
  .fromTo("#git", {y: 500, autoAlpha: 0}, {y: 0, autoAlpha: 1, duration: 2}, 1)
  .fromTo("#post", {x: 500, autoAlpha: 0}, {x: 0, autoAlpha: 1, duration: 2}, 1);
  
  //skills card instruction
  tlCard.fromTo(".box2", {y: 500, autoAlpha: 0}, {y: 0, autoAlpha: 1, duration: 2})
  
  // Define the button event listener to hide the box2 element when clicked
  close.addEventListener("click", function () {
  box.style.display = "none";
  });
  
  //project section
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
  
  // Add smooth scroll animation to the button
  const contactButton = document.querySelector(".button-contact");
  contactButton.addEventListener("click", function() {
  gsap.to(window, {duration: 1, scrollTo: {y: "#contact", offsetY: 50}});
  });


  

//skills cards movement
var tlCard = gsap.timeline({
    scrollTrigger: {
      trigger: "#skills",
      scrub: true,
      pin: true,
      start: "top top",
      end: "+=100%"
    }
  });
  tlCard.fromTo("#java", {y: -500, autoAlpha: 0}, {y: 0, autoAlpha: 1, duration: 2})
  .fromTo("#boot", {x: -500, autoAlpha: 0}, {x: 0, autoAlpha: 1, duration: 2}, 0)
  .fromTo("#spring", {y: 500, autoAlpha: 0}, {y: 0, autoAlpha: 1, duration: 2},0)
  .fromTo("#javascript", {y: -500, autoAlpha: 0}, {y: 0, autoAlpha: 1, duration: 2},0)
  .fromTo("#gsap", {y: 500, autoAlpha: 0}, {y: 0, autoAlpha: 1, duration: 2}, 0)
  .fromTo("#mysql", {x: 500, autoAlpha: 0}, {x: 0, autoAlpha: 1, duration: 2}, 0);
  tlCard.fromTo("#python", {y: -500, autoAlpha: 0}, {y: 0, autoAlpha: 1, duration: 2},1)
  .fromTo("#css", {x: -500, autoAlpha: 0}, {x: 0, autoAlpha: 1, duration: 2}, 1)
  .fromTo("#docker", {y: 500, autoAlpha: 0}, {y: 0, autoAlpha: 1, duration: 2},1)
  .fromTo("#html", {y: -500, autoAlpha: 0}, {y: 0, autoAlpha: 1, duration: 2},1)
  .fromTo("#git", {y: 500, autoAlpha: 0}, {y: 0, autoAlpha: 1, duration: 2}, 1)
  .fromTo("#post", {x: 500, autoAlpha: 0}, {x: 0, autoAlpha: 1, duration: 2}, 1);

 //skills card instruction 
tlCard.fromTo(".box2", {y: 500, autoAlpha: 0}, {y: 0, autoAlpha: 1, duration: 2})


// Define the button event listener to hide the box2 element when clicked
close.addEventListener("click", function () {
 box.style.display = "none";
});


//project section
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

         
