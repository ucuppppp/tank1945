import Block from "./Block.js";
import BulletController from "./BulletController.js";
import Enemy from "./Enemy.js";
import Tank from "./Tank.js";

const canvas = document.getElementById("canvas");
const ctx = canvas.getContext("2d");

canvas.width = 960;
canvas.height = 720;
const x = canvas.width / 2;
const y = canvas.height / 2;
const blockWidth = 80;

let blockList = [
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

const enemybulletController = new BulletController(
  canvas,
  3,
  "red",
  false,
  null
);

let enemies = [
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

const playerbulletController = new BulletController(
  canvas,
  1,
  "yellow",
  true,
  "assets/sounds/shoot.wav"
);

let player = new Tank(
  canvas,
  "./assets/img/player1Adjust.png",
  5,
  blockList,
  playerbulletController,
  enemies
);

let win = false;
let lose = false;
let gameInterval;
const bgSound = new Audio("assets/sounds/backsound.wav");


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
  }

  // Check lose condition
  if (player.health <= 0) {
    lose = true;
  }

 

  // Handle game over scenarios
  if (win || lose) {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    ctx.fillStyle = "black";
    ctx.fillRect(0, 0, canvas.width, canvas.height);
    ctx.fillStyle = "white";
    ctx.textAlign = "center";
    ctx.font = "bold 5em Retro Gaming";
    ctx.fillText(win ? "YOU WIN" : "YOU LOSE", x, y);
    if (win) {
      // let winSound = new Audio("assets/sounds/gameOver.mp3");
      // winSound.play();
    } else if (lose) {
      let loseSound = new Audio("assets/sounds/gameOver.mp3");
      loseSound.play();
    }



    // Stop the game loop
    bgSound.pause();
    clearInterval(gameInterval);
    // alert("Game stopped"); // Log to confirm game loop has stopped
  }
}

// Function to show intro screen
function showIntro() {
  ctx.fillStyle = "black";
  ctx.fillRect(0, 0, canvas.width, canvas.height);
  ctx.fillStyle = "white";
  ctx.font = "bold 3em Retro Gaming";
  ctx.textAlign = "center";
  ctx.fillText("STAGE 1", canvas.width / 2, canvas.height / 2);
  const introSound = new Audio("assets/sounds/stageStart.mp3");
  introSound.play();
  setTimeout(() => {
    bgSound.loop = true;
    bgSound.play();
    bgSound.volume = 0.5;
  } , 4500);
  setTimeout(() => {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    gameInterval = setInterval(game, 1000 / 60);
  }, 3000); // Display intro screen for 3 seconds before starting the game
}

// Call the function to display intro screen and start the game
showIntro();
