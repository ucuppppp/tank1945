export default class Bullet {
  constructor(canvas, x, y, color, speed, direction) {
    this.canvas = canvas;
    this.x = x;
    this.y = y;
    this.width = 10;
    this.height = 10;
    this.color = color;
    this.speed = speed;
    this.direction = direction;
    this.destroyed = false; // Menandai apakah peluru telah hancur
  }

  draw(ctx, blockList) {
    this.move();
    this.checkCollision(blockList);
    if (!this.destroyed) {
      ctx.fillStyle = this.color;
      ctx.fillRect(this.x, this.y, this.width, this.height);
    }
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
    this.checkOutOfBounds();
  }

  checkCollision(blockList) {
    for (let i = 0; i < blockList.length; i++) {
      const block = blockList[i];
      if (
        this.x < block.x + block.width &&
        this.x + this.width > block.x &&
        this.y < block.y + block.height &&
        this.y + this.height > block.y
      ) {
        blockList.splice(i, 1);
        this.destroyed = true;
        break;
      }
    }
  }

  checkOutOfBounds() {
    if (
      this.x < 0 ||
      this.x > this.canvas.width ||
      this.y < 0 ||
      this.y > this.canvas.height
    ) {
      this.destroyed = true;
    }
  }
}
