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

  
  draw(ctx, blockList, enemies, players) {
    this.move();
    // console.log(this.x, this.y, this.direction, !this.destroyed)
    this.checkCollision(blockList, enemies, players);
    // console.log(this.destroyed)
    if (!this.destroyed) {
      // console.log(this.color, this.x, this.y);
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

  checkCollision(blockList, enemies, players) {
    for (let i = 0; i < blockList.length; i++) {
      const block = blockList[i];
      if (
        this.x < block.x + block.width &&
        this.x + this.width > block.x &&
        this.y < block.y + block.height &&
        this.y + this.height > block.y
      ) {
        this.destroyed = true;
        if(block.health > 1) {
          block.health--;
        } else {
          blockList.splice(i, 1);
        }
        break;
      }
    }

    for (let i = 0; i < enemies.length; i++) {
      const enemy = enemies[i];
      if (
        this.x < enemy.x + enemy.width &&
        this.x + this.width > enemy.x &&
        this.y < enemy.y + enemy.height &&
        this.y + this.height > enemy.y
      ) {
        enemies.splice(i, 1);
        if(enemies.length === 0) {
          const winSound = new Audio("assets/sounds/win.wav");
        }
        console.log(enemies)
        const enemyDestroySound = new Audio("assets/sounds/enemyDestroy.wav");
        // enemyDestroySound.play();
        this.destroyed = true; 
        
        break;
      }
    }

    // for (let i = 0; i < players.length; i++) {
    //   const player = players[i];
    //   if (
    //     this.x < player.x + player.width &&
    //     this.x + this.width > player.x &&
    //     this.y < player.y + player.height &&
    //     this.y + this.height > player.y
    //   ) {
    //     player.health--;
    //     this.destroyed = true;
    //     break;
    //   }
    // }

  }

  checkOutOfBounds() {
    if (
      this.x < 0 ||
      this.x > this.canvas.width ||
      this.y < 0 ||
      this.y > this.canvas.height
    ) {
      const outOfCanvasSound = new Audio("assets/sounds/outOfCanvas.wav");
      outOfCanvasSound.play();
      this.destroyed = true;
      
    }
  }
}
