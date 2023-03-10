gsap.registerPlugin(ScrollTrigger);

const box = document.querySelector(".box2");
let about = document.querySelector("#about")
let close = document.querySelector(".close-box")

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
    about,
    {
        clipPath: "circle(0% at 49.6% 15%)",
        duration: 2,
        ease: "sine.inOut"
    },
    {
        clipPath: "circle(75% at 50% 50%)",
        duration: 2,
        ease: "sine.inOut"
    }
).from(".button", {
    y: 100,
    opacity: 0,
    ease: "elastic.out(2,1.5)", // add a spring effect
    duration: 1,
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
    end: "+=50%"
  }
});
tlproject.fromTo(".circle1", {x: -300, y: -500, autoAlpha: 0}, {x: -300, y: -100, autoAlpha: 1, duration: 1},0)
         .fromTo(".circle2", {x: 1500, y:-200, autoAlpha: 0}, {x: 700, autoAlpha: 1, duration: 1},0)
         .fromTo(".circle3", {x: -1500, autoAlpha: 0}, {x: -700, y: 100, autoAlpha: 1, duration: 1},0)
         .fromTo(".circle4", {x: 2000,y:1000, autoAlpha: 0}, {x: 500,y:500, autoAlpha: 1, duration: 1},0)
         .fromTo(".circle5", {x: -1000,y:2000, autoAlpha: 0}, {x: -500,y:540, autoAlpha: 1, duration: 1},0)
         .fromTo(".circle6", {x: 500,y:500, autoAlpha: 0}, {x: 200,y:100, autoAlpha: 1, duration: 1})