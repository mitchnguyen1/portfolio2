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
  y: 200,
  opacity: 0,
  ease: "elastic.out(1, 0.75)",
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
  