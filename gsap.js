gsap.registerPlugin(ScrollTrigger);


let tlAbout = gsap.timeline({
    scrollTrigger:{
        trigger:"#about",
        scrub: true,
        pin: true,
        start: "top top",
        end: "+=100%",
        markers: true
    }
});




let tlProj = gsap.timeline({
    scrollTrigger:{
        trigger:"#projects",
        scrub:1,
        pin: true,
        markers: true,
          snap: {
      snapTo: 0.33,
      duration: 0.02,
      ease: "power1.inOut"
    },
    }
});


let tlCon = gsap.timeline({
    scrollTrigger:{
        trigger:"#contact",
        scrub:1,
        pin: true,
        markers: true,
          snap: {
      snapTo: 0.33,
      duration: 0.02,
      ease: "power1.inOut"
    },
    }
});