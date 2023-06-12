// Animation Intro

// Setup Canvas and Graphics Context
let cnv = document.getElementById("myCanvas");
let ctx = cnv.getContext("2d");
cnv.width = 600;
cnv.height = 600;

// Global Variables
let rectX = 0;
let rectY = 0;

setInterval(loop, 20);
function loop() {
  // Update Variables
  rectX = rectX + 1;
  rectY = rectY + 1;
  // Draw a Square
  ctx.fillStyle = "lime";
  ctx.fillRect(rectX, rectY, 80, 80);

  let rectX2 = 600;
  let rectY2 = 600;

  setInterval(loop, 20);
  function loop() {
    // Update Variables
    rectX2 = rectX2 - 1;
    rectY2 = rectY2 - 1;
    // Draw a Square
    ctx.fillStyle = "grey";
    ctx.fillRect(rectX2, rectY2, 80, 80);
  }
}
