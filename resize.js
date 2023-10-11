//in the top of the same file it's used in

const canvas = document.getElementById("game_screen");

const originalWidth = canvas.width;
const originalHeight = canvas.height;
var scaleX = 0;
var scaleY = 0;

//in the update loop

resizeCanvasForWindowSize()

//anywhere on the surface

resizeCanvasForWindowSize() {

  var currentWidth = canvas.width;
  var currentHeight = canvas.height;

  var windowWidth = window.innerWidth;
  var windowHeight = window.innerHeight;

  var desiredWidth = windowWidth;
  var aspectRatio = originalWidth / originalHeight;
  var desiredHeight = desiredWidth / aspectRatio;
  canvas.width = desiredWidth;
  canvas.height = desiredHeight;
  scaleX = (desiredWidth / originalWidth);
  scaleY = (desiredHeight / originalHeight);
  ctx.setTransform(scaleY, 0, 0, scaleX, 0, 0)
  
  currentWidth = canvas.width;
  currentHeight = canvas.height;
  
  if (currentHeight >= windowHeight) {
    desiredHeight = windowHeight;
    aspectRatio = originalWidth / originalHeight;
    desiredWidth = desiredHeight * aspectRatio;
    canvas.width = desiredWidth;
    canvas.height = desiredHeight;
    scaleX = (desiredWidth / originalWidth);
    scaleY = (desiredHeight / originalHeight);
    ctx.setTransform(scaleY, 0, 0, scaleX, 0, 0)
  
  }
