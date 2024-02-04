export default class Bullet {
  constructor(canvas, x, y,color, speed, direction) {
    this.canvas = canvas
    this.x = x;
    this.y = y;
    this.width = 10;
    this.height = 10 ;
    this.color = color;
    this.speed = speed;
    this.direction = direction;
  }

  draw(ctx) {
    this.move()
    ctx.fillStyle = this.color;
    ctx.fillRect(this.x, this.y, this.width, this.height);
  }

  move() {
    switch (this.direction) {
      case "up":
        this.y -= this.speed;
        break;
      case "down":
        this.y += this.speed;
        break;
      case "left":
        this.x -= this.speed;
        break;
      case "right":
        this.x += this.speed;
        break;
    }
  }
}
