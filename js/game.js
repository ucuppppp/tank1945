import Tank from "./Tank.js";

const canvas = document.getElementById("canvas");
const ctx = canvas.getContext("2d");

canvas.width = 1000;
canvas.height = 600;

const tank = new Tank(canvas, '/assets/img/player1_tank.png', 6);

function game() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  tank.draw(ctx);
}

setInterval(game, 1000 / 60);
