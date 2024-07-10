import Block from "./Block.js";
import BulletController from "./BulletController.js";
import Enemy from "./Enemy.js";
import Tank from "./Tank.js";

const canvas = document.getElementById("canvas");
const ctx = canvas.getContext("2d");

canvas.width = 960;
canvas.height = 720;
const blockWidth = 80;
const enemyWidthAndHeight = 100;
const playerWidthAndHeight = 100;

const blockList = [
  new Block(
    canvas,
    80,
    0,
    blockWidth,
    blockWidth,
    "./assets/img/break_brick.jpg",
    3
  ),
  new Block(
    canvas,
    80,
    80,
    blockWidth,
    blockWidth,
    "./assets/img/break_brick.jpg",
    3
  ),
  new Block(
    canvas,
    80,
    160,
    blockWidth,
    blockWidth,
    "./assets/img/break_brick.jpg",
    3
  ),
  new Block(
    canvas,
    80,
    240,
    blockWidth,
    blockWidth,
    "./assets/img/break_brick.jpg",
    3
  ),
  new Block(
    canvas,
    80,
    400,
    blockWidth,
    blockWidth,
    "./assets/img/solid_brick.jpg",
    6
  ),
  new Block(
    canvas,
    80,
    480,
    blockWidth,
    blockWidth,
    "./assets/img/solid_brick.jpg",
    6
  ),
  new Block(
    canvas,
    80,
    560,
    blockWidth,
    blockWidth,
    "./assets/img/solid_brick.jpg",
    6
  ),
  new Block(
    canvas,
    160,
    560,
    blockWidth,
    blockWidth,
    "./assets/img/solid_brick.jpg",
    6
  ),
  new Block(
    canvas,
    240,
    560,
    blockWidth,
    blockWidth,
    "./assets/img/solid_brick.jpg",
    6
  ),
  new Block(
    canvas,
    320,
    560,
    blockWidth,
    blockWidth,
    "./assets/img/solid_brick.jpg",
    6
  ),
  new Block(
    canvas,
    400,
    560,
    blockWidth,
    blockWidth,
    "./assets/img/solid_brick.jpg",
    6
  ),
  new Block(
    canvas,
    560,
    560,
    blockWidth,
    blockWidth,
    "./assets/img/break_brick.jpg",
    3
  ),
  new Block(
    canvas,
    640,
    560,
    blockWidth,
    blockWidth,
    "./assets/img/break_brick.jpg",
    3
  ),
  new Block(
    canvas,
    720,
    560,
    blockWidth,
    blockWidth,
    "./assets/img/break_brick.jpg",
    3
  ),
  new Block(
    canvas,
    800,
    560,
    blockWidth,
    blockWidth,
    "./assets/img/break_brick.jpg",
    3
  ),
  new Block(
    canvas,
    800,
    480,
    blockWidth,
    blockWidth,
    "./assets/img/break_brick.jpg",
    3
  ),
  new Block(
    canvas,
    800,
    400,
    blockWidth,
    blockWidth,
    "./assets/img/break_brick.jpg",
    3
  ),
  new Block(
    canvas,
    800,
    320,
    blockWidth,
    blockWidth,
    "./assets/img/break_brick.jpg",
    3
  ),
  new Block(
    canvas,
    800,
    240,
    blockWidth,
    blockWidth,
    "./assets/img/break_brick.jpg",
    3
  ),
  new Block(
    canvas,
    240,
    80,
    blockWidth,
    blockWidth,
    "./assets/img/break_brick.jpg",
    3
  ),
  new Block(
    canvas,
    320,
    80,
    blockWidth,
    blockWidth,
    "./assets/img/break_brick.jpg",
    3
  ),
  new Block(
    canvas,
    480,
    80,
    blockWidth,
    blockWidth,
    "./assets/img/break_brick.jpg",
    3
  ),
  new Block(
    canvas,
    560,
    80,
    blockWidth,
    blockWidth,
    "./assets/img/break_brick.jpg",
    3
  ),
  new Block(
    canvas,
    640,
    80,
    blockWidth,
    blockWidth,
    "./assets/img/break_brick.jpg",
    3
  ),
  new Block(
    canvas,
    720,
    80,
    blockWidth,
    blockWidth,
    "./assets/img/break_brick.jpg",
    3
  ),
  new Block(
    canvas,
    800,
    80,
    blockWidth,
    blockWidth,
    "./assets/img/break_brick.jpg",
    3
  ),
  new Block(
    canvas,
    240,
    160,
    blockWidth,
    blockWidth,
    "./assets/img/break_brick.jpg",
    3
  ),
  new Block(
    canvas,
    240,
    240,
    blockWidth,
    blockWidth,
    "./assets/img/break_brick.jpg",
    3
  ),
  new Block(
    canvas,
    240,
    320,
    blockWidth,
    blockWidth,
    "./assets/img/break_brick.jpg",
    3
  ),
  new Block(
    canvas,
    240,
    400,
    blockWidth,
    blockWidth,
    "./assets/img/break_brick.jpg",
    3
  ),
  new Block(
    canvas,
    320,
    400,
    blockWidth,
    blockWidth,
    "./assets/img/break_brick.jpg",
    3
  ),
  new Block(
    canvas,
    400,
    400,
    blockWidth,
    blockWidth,
    "./assets/img/break_brick.jpg",
    3
  ),
  new Block(
    canvas,
    480,
    400,
    blockWidth,
    blockWidth,
    "./assets/img/break_brick.jpg",
    3
  ),
  new Block(
    canvas,
    560,
    400,
    blockWidth,
    blockWidth,
    "./assets/img/break_brick.jpg",
    3
  ),
  new Block(
    canvas,
    640,
    400,
    blockWidth,
    blockWidth,
    "./assets/img/break_brick.jpg",
    3
  ),
  new Block(
    canvas,
    640,
    320,
    blockWidth,
    blockWidth,
    "./assets/img/break_brick.jpg",
    3
  ),
  new Block(
    canvas,
    640,
    240,
    blockWidth,
    blockWidth,
    "./assets/img/break_brick.jpg",
    3
  ),
  new Block(
    canvas,
    560,
    240,
    blockWidth,
    blockWidth,
    "./assets/img/break_brick.jpg",
    3
  ),
  new Block(
    canvas,
    480,
    240,
    blockWidth,
    blockWidth,
    "./assets/img/break_brick.jpg",
    3
  ),
  new Block(
    canvas,
    400,
    240,
    blockWidth,
    blockWidth,
    "./assets/img/break_brick.jpg",
    3
  ),
];

const enemybulletController = new BulletController(canvas, 3, "red", false, null);
const enemies = [
  new Enemy(
    canvas,
    880,
    0,
    "./assets/img/enemyAdjust.png",
    2,
    "down",
    90,
    90,
    blockList,
    enemybulletController
  ),
  new Enemy(
    canvas,
    875,
    625,
    "./assets/img/player1Adjust.png",
    2,
    "up",
    90,
    90,
    blockList,
    enemybulletController
  ),
  new Enemy(
    canvas,
    -15,
    625,
    "./assets/img/enemyAdjust.png",
    2,
    "right",
    90,
    90,
    blockList,
    enemybulletController
  ),
];

const imgRender = ["./assets/img/break_brick.jpg", "./assets/img/solid_brick.jpg"];

const playerbulletController = new BulletController(
  canvas,
  1,
  "yellow",
  true,
  "assets/sounds/shoot.wav"
);
const player = new Tank(
  canvas,
  "./assets/img/player1Adjust.png",
  2,
  blockList,
  playerbulletController,
  enemies
);
const player2 = new Tank(
  canvas,
  "./assets/img/player1Adjust.png",
  2,
  blockList,
  playerbulletController,
  enemies
);

let win = false
let lose = false

function game() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);

  blockList.forEach((block) => {
    block.draw(ctx);
  });

  player.draw(ctx);
  playerbulletController.draw(ctx, blockList, enemies, [player]);

  enemies.forEach((enemy) => {
    enemy.draw(ctx);
    enemybulletController.draw(ctx, blockList, [player], enemies);
  });

  // Check win condition
  if (playerbulletController.gameOver) {
    win = true;
    console.log(win);
  }

  // Check lose condition and handle it
  if (enemybulletController.gameOver) {
    lose = true;
    console.log("lose");
  }

  // Handle game over scenarios
  if (win) {
    console.log("win");
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    ctx.fillStyle = "black";
    ctx.fillRect(0, 0, canvas.width, canvas.height);
    ctx.fillStyle = "white";
    ctx.font = "80px Arial";
    ctx.fillText("YOU WIN", 300, 350);
    return; // Stop the game loop
  }

  if (lose) {
    console.log("lose");
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    ctx.fillStyle = "black";
    ctx.fillRect(0, 0, canvas.width, canvas.height);
    ctx.fillStyle = "white";
    ctx.font = "60px Arial";
    ctx.fillText("YOU LOSE", 250, 300);
    return; // Stop the game loop
  }
}

// Start the game loop
setInterval(game, 1000 / 60);
