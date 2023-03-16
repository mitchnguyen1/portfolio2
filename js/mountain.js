const windowWidth = window.innerWidth;

const largerScreen = windowWidth > 2500;

if (largerScreen) {
  const tlConLarger = gsap.timeline({
    scrollTrigger: {
      trigger: "#contact",
      scrub: true,
      pin: true,
      start: "top top",
      end: "+=100%",
    },
  });

  tlConLarger.fromTo(".mountain1", { x: 2000, y: 300, autoAlpha: 1 }, { x: 152, y: 245, autoAlpha: 1, duration: 1 }, 0)
    .fromTo(".mountain2", { x: -2500, y: 300, autoAlpha: 1 }, { x: -170, y: 245, autoAlpha: 1, duration: 1 }, 0)
    .fromTo(".mountain3", { x: 2000, y: 300, autoAlpha: 1 }, { x: 152, y: 245, autoAlpha: 1, duration: 1 }, 1)
    .fromTo(".mountain4", { x: 0, y: 1800, autoAlpha: 1 }, { x: 0, y: 245, autoAlpha: 1, duration: 1.5 }, 2)
    .fromTo(".cardCon", { x: 0, y: 1500, autoAlpha: 1 }, { x: 0, y: 0, autoAlpha: 1, duration: 1.5 }, 3);
} else {
  const tlConSmaller = gsap.timeline({
    scrollTrigger: {
      trigger: "#contact",
      scrub: true,
      pin: true,
      start: "top top",
      end: "+=100%",
    },
  });

  tlConSmaller.fromTo(".mountain1", { x: 1000, y: 150, autoAlpha: 1 }, { x: 0, y: 0, autoAlpha: 1, duration: 1 }, 0)
    .fromTo(".mountain2", { x: -1500, y: 150, autoAlpha: 1 }, { x: 0, y: 0, autoAlpha: 1, duration: 1 }, 0)
    .fromTo(".mountain3", { x: 1000, y: 150, autoAlpha: 1 }, { x: 0, y: 0, autoAlpha: 1, duration: 1 }, 1)
    .fromTo(".mountain4", { x: 0, y: 1200, autoAlpha: 1 }, { x: 0, y: 0, autoAlpha: 1, duration: 1.5 }, 2)
    .fromTo(".cardCon", { x: 0, y: 1000, autoAlpha: 1 }, { x: 0, y: 0, autoAlpha: 1, duration: 1.5 }, 3);
}
