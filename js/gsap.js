gsap.registerPlugin(ScrollTrigger);

let about = document.querySelector("#about")

gsap.fromTo(
    about,
    {
        clipPath: "circle(4% at 49.5% 17.5%)",
    },
    {
        clipPath: "circle(75% at 50% 50%)",
        ease: "none",
        
      //  We want to do that animation on scroll
        scrollTrigger: {
        trigger: about,
        scrub: 1,
        start: "top center",
        end: "top center-=200",
        },
    }
);

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
  
// let tlAbout = gsap.timeline({
//     scrollTrigger:{
//         trigger:"#about",
//         scrub: true,
//         pin: true,
//         start: "top top",
//         end: "+=100%",
//         markers: true
//     }
// });




// let tlProj = gsap.timeline({
//     scrollTrigger:{
//         trigger:"#projects",
//         scrub:1,
//         pin: true,
//         markers: true,
//           snap: {
//       snapTo: 0.33,
//       duration: 0.02,
//       ease: "power1.inOut"
//     },
//     }
// });


// let tlCon = gsap.timeline({
//     scrollTrigger:{
//         trigger:"#contact",
//         scrub:1,
//         pin: true,
//         markers: true,
//           snap: {
//       snapTo: 0.33,
//       duration: 0.02,
//       ease: "power1.inOut"
//     },
//     }
// });