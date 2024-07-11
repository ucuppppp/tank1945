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
    this.checkCollision(blockList, enemies, players);

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

  checkCollision(blockList, enemies, players) {
    // Check collision with blocks
    for (let i = 0; i < blockList.length; i++) {
      const block = blockList[i];
      if (
        this.x < block.x + block.width &&
        this.x + this.width > block.x &&
        this.y < block.y + block.height &&
        this.y + this.height > block.y
      ) {
        this.destroyed = true;
        if (block.health > 1) {
          block.health--;
        } else {
          blockList.splice(i, 1);
        }
        break;
      }
    }

    // Check collision with enemies
    for (let i = 0; i < enemies.length; i++) {
      const enemy = enemies[i];
      if (
        this.x < enemy.x + enemy.width &&
        this.x + this.width > enemy.x &&
        this.y < enemy.y + enemy.height &&
        this.y + this.height > enemy.y
      ) {
        const health = enemy.health;
        if (health > 0) {
          for (let j = 0; j < players.length; j++) {
            const damage = players[j].damage;
            enemy.health = health - damage// Reduksi health enemy hanya 1 kali per collision
            console.log(players);
          }
          console.log(enemy.health);
        }
        if (health <= 1) {
          enemies.splice(i, 1);
          const enemyDestroySound = new Audio("assets/sounds/enemyDestroy.wav");
          enemyDestroySound.play();
        }
        this.destroyed = true;
        break;
      }
    }

    // Check if bullet is out of bounds
    this.checkOutOfBounds();
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
