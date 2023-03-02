gsap.registerPlugin(ScrollTrigger);

const box = document.querySelector(".box2");
let about = document.querySelector("#about")
let close = document.querySelector(".close-box")

//about section curtains
gsap.fromTo(
    about,
    {
        clipPath: "circle(3.5% at 49.65% 17%)",
    },
    {
        clipPath: "circle(75% at 50% 50%)",
        ease: "sine",
        
      //  We want to do that animation on scroll
        scrollTrigger: {
        trigger: about,
        scrub: 1,
        start: "top center",
        end: "top center-=200",
        },
    }
);
//resume download button
gsap.from(".button", {
    y: 100,
    opacity: 0,
    ease: "elastic.out(2,1.5)", // add a spring effect
    duration: 2,
    delay: 0.7, // add a delay for a better effect
    scrollTrigger: {
      trigger: ".button",
      start: "top bottom", // start the animation when the button is in view
      toggleActions: "play none none none", 
    },
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





