// Main.js
import Block from "./Block.js";
import Tank from "./Tank.js";

const canvas = document.getElementById("canvas");
const ctx = canvas.getContext("2d");

canvas.width = 960;
canvas.height = 720;
const blockWidth = 80


const blockList = [
  new Block(canvas, 80, 0, blockWidth, blockWidth, './assets/img/break_brick.jpg'),
  new Block(canvas, 80, 80, blockWidth, blockWidth, './assets/img/break_brick.jpg'),
  new Block(canvas, 80, 160, blockWidth, blockWidth, './assets/img/break_brick.jpg'),
  new Block(canvas, 80, 240, blockWidth, blockWidth, './assets/img/break_brick.jpg'),
  new Block(canvas, 80, 320, blockWidth, blockWidth, './assets/img/break_brick.jpg'),
  new Block(canvas, 80, 400, blockWidth, blockWidth, './assets/img/break_brick.jpg'),
  new Block(canvas, 80, 480, blockWidth, blockWidth, './assets/img/break_brick.jpg'),
  new Block(canvas, 80, 560, blockWidth, blockWidth, './assets/img/break_brick.jpg'),
  new Block(canvas, 160, 560, blockWidth, blockWidth, './assets/img/break_brick.jpg'),
  new Block(canvas, 240, 560, blockWidth, blockWidth, './assets/img/break_brick.jpg'),
  new Block(canvas, 320, 560, blockWidth, blockWidth, './assets/img/break_brick.jpg'),
  new Block(canvas, 400, 560, blockWidth, blockWidth, './assets/img/break_brick.jpg'),
  new Block(canvas, 480, 560, blockWidth, blockWidth, './assets/img/break_brick.jpg'),
  new Block(canvas, 560, 560, blockWidth, blockWidth, './assets/img/break_brick.jpg'),
  new Block(canvas, 640, 560, blockWidth, blockWidth, './assets/img/break_brick.jpg'),
  new Block(canvas, 720, 560, blockWidth, blockWidth, './assets/img/break_brick.jpg'),
  new Block(canvas, 800, 560, blockWidth, blockWidth, './assets/img/break_brick.jpg'),
  new Block(canvas, 800, 480, blockWidth, blockWidth, './assets/img/break_brick.jpg'),
  new Block(canvas, 800, 400, blockWidth, blockWidth, './assets/img/break_brick.jpg'),
  new Block(canvas, 800, 320, blockWidth, blockWidth, './assets/img/break_brick.jpg'),
  new Block(canvas, 800, 240, blockWidth, blockWidth, './assets/img/break_brick.jpg'),
  new Block(canvas, 800, 160, blockWidth, blockWidth, './assets/img/break_brick.jpg'),
  new Block(canvas, 240, 80, blockWidth, blockWidth, './assets/img/break_brick.jpg'),
  new Block(canvas, 320, 80, blockWidth, blockWidth, './assets/img/break_brick.jpg'),
  new Block(canvas, 400, 80, blockWidth, blockWidth, './assets/img/break_brick.jpg'),
  new Block(canvas, 480, 80, blockWidth, blockWidth, './assets/img/break_brick.jpg'),
  new Block(canvas, 560, 80, blockWidth, blockWidth, './assets/img/break_brick.jpg'),
  new Block(canvas, 640, 80, blockWidth, blockWidth, './assets/img/break_brick.jpg'),
  new Block(canvas, 720, 80, blockWidth, blockWidth, './assets/img/break_brick.jpg'),
  new Block(canvas, 800, 80, blockWidth, blockWidth, './assets/img/break_brick.jpg'),
  new Block(canvas, 240, 160, blockWidth, blockWidth, './assets/img/break_brick.jpg'),
  new Block(canvas, 240, 240, blockWidth, blockWidth, './assets/img/break_brick.jpg'),
  new Block(canvas, 240, 320, blockWidth, blockWidth, './assets/img/break_brick.jpg'),
  new Block(canvas, 240, 400, blockWidth, blockWidth, './assets/img/break_brick.jpg'),
  new Block(canvas, 320, 400, blockWidth, blockWidth, './assets/img/break_brick.jpg'),
  new Block(canvas, 400, 400, blockWidth, blockWidth, './assets/img/break_brick.jpg'),
  new Block(canvas, 480, 400, blockWidth, blockWidth, './assets/img/break_brick.jpg'),
  new Block(canvas, 560, 400, blockWidth, blockWidth, './assets/img/break_brick.jpg'),
  new Block(canvas, 640, 400, blockWidth, blockWidth, './assets/img/break_brick.jpg'),
  new Block(canvas, 640, 320, blockWidth, blockWidth, './assets/img/break_brick.jpg'),
  new Block(canvas, 640, 240, blockWidth, blockWidth, './assets/img/break_brick.jpg'),
  new Block(canvas, 560, 240, blockWidth, blockWidth, './assets/img/break_brick.jpg'),
  new Block(canvas, 480, 240, blockWidth, blockWidth, './assets/img/break_brick.jpg'),
  new Block(canvas, 400, 240, blockWidth, blockWidth, './assets/img/break_brick.jpg'),
  
  // dan seterusnya
];

const tank = new Tank(canvas, '/assets/img/player1_tank.png', 6, blockList);

function game() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);

  blockList.forEach((block) => {
    block.draw(ctx);
  });
  tank.draw(ctx)

}

setInterval(game, 1000 / 60);
