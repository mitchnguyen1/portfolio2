import { Application } from './runtime.js';
const canvas = document.getElementById('canvas3d');
const loader = document.querySelector('.loader');
const loadText = document.querySelector('.loadText');
const threeD = document.getElementById('threeD');
const nav = document.querySelector('.navbar');
const box = document.querySelector('.box');
const app = new Application(canvas);

// hide the canvas and navbar and scroll initially
canvas.style.display = 'none';
nav.style.display = 'none';
// document.documentElement.style.overflowY = 'hidden';
document.body.style.overflowY = 'hidden';

// load the scene
app.load('./scene.splinecode').then(() => {
  // show the canvas and navabr and hide the loader when the scene is done loading
  canvas.style.display = 'block';
  nav.style.display = 'block';
  loader.style.display = 'none';
  loadText.style.display = 'none';
  threeD.style.backgroundImage = "none";
  box.style.display="block";
  // enable scrolling again
  document.body.style.overflowY = 'auto';
});

window.onscroll = function(){
  let top = window.scrollY;
  let home = document.getElementById("navHome");
  let about =  document.getElementById("navAbout");
  let proj =  document.getElementById("navProj");
  let con =  document.getElementById("navCon");
  home.style.color="red";
  about.style.color="white";
  proj.style.color="white";
  con.style.color="white";
console.log(top);
  if(top <= 1250){
    nav.style.backgroundColor = "rgb(62,17,131)";
    home.style.color="Red";
    about.style.color="white";
    proj.style.color="white";
    con.style.color="white";
  }
  else if (top > 1250 && top < 2450){
    nav.style.backgroundColor = "rgb(18,24,85)";
    home.style.color="white";
    about.style.color="red";
    proj.style.color="white";
    con.style.color="white";
  }
  else if(top >= 2450 && top < 3700 ){
    nav.style.backgroundColor = "pink";
    home.style.color="white";
    about.style.color="white";
    proj.style.color="red";
    con.style.color="white";
  }
  else if(top >= 3700){
    nav.style.backgroundColor = "green";
    home.style.color="white";
    about.style.color="white";
    proj.style.color="white";
    con.style.color="red";
  }
}

