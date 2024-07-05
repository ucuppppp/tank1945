import Block from "./Block.js";
import BulletController from "./BulletController.js";
import Enemy from "./Enemy.js";
import Tank from "./Tank.js";

const canvas = document.getElementById("canvas");
const ctx = canvas.getContext("2d");

canvas.width = 960;
canvas.height = 720;
const blockWidth = 80;

const blockList = [
  new Block(
    canvas,
    80,
    0,
    blockWidth,
    blockWidth,
    "./assets/img/break_brick.jpg"
  ),
  new Block(
    canvas,
    80,
    80,
    blockWidth,
    blockWidth,
    "./assets/img/break_brick.jpg"
  ),
  new Block(
    canvas,
    80,
    160,
    blockWidth,
    blockWidth,
    "./assets/img/break_brick.jpg"
  ),
  new Block(
    canvas,
    80,
    240,
    blockWidth,
    blockWidth,
    "./assets/img/break_brick.jpg"
  ),
  new Block(
    canvas,
    80,
    400,
    blockWidth,
    blockWidth,
    "./assets/img/solid_brick.jpg"
  ),
  new Block(
    canvas,
    80,
    480,
    blockWidth,
    blockWidth,
    "./assets/img/solid_brick.jpg"
  ),
  new Block(
    canvas,
    80,
    560,
    blockWidth,
    blockWidth,
    "./assets/img/solid_brick.jpg"
  ),
  new Block(
    canvas,
    160,
    560,
    blockWidth,
    blockWidth,
    "./assets/img/solid_brick.jpg"
  ),
  new Block(
    canvas,
    240,
    560,
    blockWidth,
    blockWidth,
    "./assets/img/solid_brick.jpg"
  ),
  new Block(
    canvas,
    320,
    560,
    blockWidth,
    blockWidth,
    "./assets/img/solid_brick.jpg"
  ),
  new Block(
    canvas,
    400,
    560,
    blockWidth,
    blockWidth,
    "./assets/img/solid_brick.jpg"
  ),
  new Block(
    canvas,
    560,
    560,
    blockWidth,
    blockWidth,
    "./assets/img/break_brick.jpg"
  ),
  new Block(
    canvas,
    640,
    560,
    blockWidth,
    blockWidth,
    "./assets/img/break_brick.jpg"
  ),
  new Block(
    canvas,
    720,
    560,
    blockWidth,
    blockWidth,
    "./assets/img/break_brick.jpg"
  ),
  new Block(
    canvas,
    800,
    560,
    blockWidth,
    blockWidth,
    "./assets/img/break_brick.jpg"
  ),
  new Block(
    canvas,
    800,
    480,
    blockWidth,
    blockWidth,
    "./assets/img/break_brick.jpg"
  ),
  new Block(
    canvas,
    800,
    400,
    blockWidth,
    blockWidth,
    "./assets/img/break_brick.jpg"
  ),
  new Block(
    canvas,
    800,
    320,
    blockWidth,
    blockWidth,
    "./assets/img/break_brick.jpg"
  ),
  new Block(
    canvas,
    800,
    240,
    blockWidth,
    blockWidth,
    "./assets/img/break_brick.jpg"
  ),
  new Block(
    canvas,
    240,
    80,
    blockWidth,
    blockWidth,
    "./assets/img/break_brick.jpg"
  ),
  new Block(
    canvas,
    320,
    80,
    blockWidth,
    blockWidth,
    "./assets/img/break_brick.jpg"
  ),
  new Block(
    canvas,
    480,
    80,
    blockWidth,
    blockWidth,
    "./assets/img/break_brick.jpg"
  ),
  new Block(
    canvas,
    560,
    80,
    blockWidth,
    blockWidth,
    "./assets/img/break_brick.jpg"
  ),
  new Block(
    canvas,
    640,
    80,
    blockWidth,
    blockWidth,
    "./assets/img/break_brick.jpg"
  ),
  new Block(
    canvas,
    720,
    80,
    blockWidth,
    blockWidth,
    "./assets/img/break_brick.jpg"
  ),
  new Block(
    canvas,
    800,
    80,
    blockWidth,
    blockWidth,
    "./assets/img/break_brick.jpg"
  ),
  new Block(
    canvas,
    240,
    160,
    blockWidth,
    blockWidth,
    "./assets/img/break_brick.jpg"
  ),
  new Block(
    canvas,
    240,
    240,
    blockWidth,
    blockWidth,
    "./assets/img/break_brick.jpg"
  ),
  new Block(
    canvas,
    240,
    320,
    blockWidth,
    blockWidth,
    "./assets/img/break_brick.jpg"
  ),
  new Block(
    canvas,
    240,
    400,
    blockWidth,
    blockWidth,
    "./assets/img/break_brick.jpg"
  ),
  new Block(
    canvas,
    320,
    400,
    blockWidth,
    blockWidth,
    "./assets/img/break_brick.jpg"
  ),
  new Block(
    canvas,
    400,
    400,
    blockWidth,
    blockWidth,
    "./assets/img/break_brick.jpg"
  ),
  new Block(
    canvas,
    480,
    400,
    blockWidth,
    blockWidth,
    "./assets/img/break_brick.jpg"
  ),
  new Block(
    canvas,
    560,
    400,
    blockWidth,
    blockWidth,
    "./assets/img/break_brick.jpg"
  ),
  new Block(
    canvas,
    640,
    400,
    blockWidth,
    blockWidth,
    "./assets/img/break_brick.jpg"
  ),
  new Block(
    canvas,
    640,
    320,
    blockWidth,
    blockWidth,
    "./assets/img/break_brick.jpg"
  ),
  new Block(
    canvas,
    640,
    240,
    blockWidth,
    blockWidth,
    "./assets/img/break_brick.jpg"
  ),
  new Block(
    canvas,
    560,
    240,
    blockWidth,
    blockWidth,
    "./assets/img/break_brick.jpg"
  ),
  new Block(
    canvas,
    480,
    240,
    blockWidth,
    blockWidth,
    "./assets/img/break_brick.jpg"
  ),
  new Block(
    canvas,
    400,
    240,
    blockWidth,
    blockWidth,
    "./assets/img/break_brick.jpg"
  ),
];

const playerbulletController = new BulletController(canvas, 1, "yellow", false);
const player = new Tank(
  canvas,
  "./assets/img/player1.png",
  4,
  blockList,
  playerbulletController
);

 const enemy1 = new Enemy(canvas, 875, 625, "./assets/img/enemy.png", 3, "up");
 const enemy2 = new Enemy(canvas, 880, 0, "./assets/img/enemy.png", 3, "down");
 const enemy3 = new Enemy(canvas, -15, 625, "./assets/img/enemy.png", 3, "right");

function game() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);

  blockList.forEach((block) => {
    block.draw(ctx);
  });


  player.draw(ctx);
  playerbulletController.draw(ctx, blockList);

  enemy1.draw(ctx);
  enemy2.draw(ctx);
  enemy3.draw(ctx);

}

setInterval(game, 1000 / 60);
