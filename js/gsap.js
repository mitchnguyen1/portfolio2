gsap.registerPlugin(ScrollTrigger);

const box = document.querySelector(".box2");
let about = document.querySelector("#about")
let close = document.querySelector(".close-box")

//about section curtains
//skills cards movement
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


//project section carousel
 
const section_2 = document.getElementById("projects");
let box_items = gsap.utils.toArray(".projectitem");

gsap.to(box_items, {
  xPercent: -100 * (box_items.length - 1),
  ease: "sine.out",
  scrollTrigger: {
    trigger: section_2,
    pin: true,
    scrub: 5,
    snap: 1 / (box_items.length - 1),
    endTrigger: ".projectitem:last-child",
    end: "center"
  }
});
