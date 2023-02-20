import { Application } from './runtime.js';
const canvas = document.getElementById('canvas3d');
const loader = document.querySelector('.loader');
const nav = document.querySelector('.navbar');
const loadText = document.querySelector('.loadText');
const app = new Application(canvas);

// hide the canvas and navbar and scroll initially
canvas.style.display = 'none';
nav.style.display = 'none';
document.documentElement.style.overflowY = 'hidden';
document.body.style.overflowY = 'hidden';

// load the scene
app.load('./scene.splinecode').then(() => {
  // show the canvas and navabr and hide the loader when the scene is done loading
  canvas.style.display = 'block';
  loader.style.display = 'none';
  nav.style.display = 'block';
  loadText.style.display = 'none';
  // enable scrolling again
  document.documentElement.style.overflowY = 'auto';
  document.body.style.overflowY = 'auto';
});