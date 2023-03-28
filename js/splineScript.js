import { Application } from '../runtime.js';
const canvas = document.getElementById('canvas3d');
const threeD = document.getElementById('threeD');
const nav = document.querySelector('.navbar');
const box = document.querySelector('.box1');
const heart = document.getElementById('heart');
const app = new Application(canvas);

// hide the canvas and navbar and scroll initially
canvas.style.display = 'none';
nav.style.display = 'none';
document.body.style.overflowY = 'hidden';

// // load the scene and enclose into the heart
setTimeout(() => {
  app.load('../scene.splinecode')
.then(() => {
 gsap.fromTo(
   threeD, {
     clipPath: "circle(100% at 50% 50%)",
   }, {
     clipPath: "circle(0% at 50% 50%)",
     ease: "none",
     duration: 1.5
   }
  )
})
.then(() => {
 //open the heart
 gsap.fromTo(
   threeD, {
     clipPath: "circle(0% at 50% 50%)",
   }, {
     clipPath: "circle(100% at 50% 50%)",
     ease: "none",
     duration: 1.5,
     delay: 2
   }
 );
 })
.then(() => {
setTimeout(() => {
     //display canvas and while hiding the splash screen
     canvas.style.display = 'block';
     box.style.display = "block";
     //hide polka and heart
     heart.style.display = "none";
     threeD.style.backgroundImage = "none";
}, 1500); // delay time in milliseconds
})
.then(() => {
// add a delay of 3 seconds
setTimeout(() => {
 //enable scrolling
 nav.style.display = 'block';
 document.body.style.overflowY = 'auto';
}, 3000); // delay time in milliseconds
});
 }, 1500);
