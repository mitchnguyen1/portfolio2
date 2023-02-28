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