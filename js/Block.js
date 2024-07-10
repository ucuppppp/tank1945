// Block.js
export default class Block {
    constructor(canvas, x, y, width, height, imageSrc, health) {
      this.canvas = canvas;
      this.x = x;
      this.y = y;
      this.width = width;
      this.height = height;
      this.image = new Image();
      this.image.src = imageSrc;
      this.health = health;
    }
  
    draw(ctx) {
      ctx.drawImage(this.image, this.x, this.y, this.width, this.height);
    }
  }
  