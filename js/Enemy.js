export default class Enemy {
  constructor(
    canvas,
    x,
    y,
    imageSrc,
    speed,
    direction,
    cooldownMax,
    blockList
  ) {
    this.canvas = canvas;
    this.x = x;
    this.y = y;
    this.width = 70;
    this.height = 80;
    this.image = new Image();
    this.image.src = imageSrc;
    this.direction = direction;
    this.speed = speed;
    this.hasCollided = false;
    this.cooldown = 0;
    this.cooldownMax = cooldownMax;
    this.blockList = blockList;
  }

  draw(ctx) {
    this.move();
    this.updateCooldown();

    ctx.save();

    // Pusat rotasi di tengah tank
    ctx.translate(this.x + this.width / 2, this.y + this.height / 2);

    // Rotasi gambar sesuai sudut
    ctx.rotate((this.angle * Math.PI) / 180);

    // Kembali ke titik awal sebelum rotasi
    ctx.translate(-(this.x + this.width / 2), -(this.y + this.height / 2));

    // Gambar tank
    ctx.drawImage(this.image, this.x, this.y, this.width, this.height);

    // Kembalikan transformasi ke keadaan sebelumnya
    ctx.restore();
  }

  move() {
    if (this.direction === "up") {
      this.angle = 0; // Sudut rotasi ke atas
      this.y -= this.speed;
    } else if (this.direction === "down") {
      this.angle = 180; // Sudut rotasi ke bawah
      this.y += this.speed;
    } else if (this.direction === "left") {
      this.angle = -90; // Sudut rotasi ke kiri
      this.x -= this.speed;
    } else if (this.direction === "right") {
      this.angle = 90; // Sudut rotasi ke kanan
      this.x += this.speed;
    }
    this.checkCollision();
  }

  changeDirection() {
    if (this.cooldown === 0) {
      const randomDirections = ["up", "down", "left", "right"];
      let newDirection = this.direction;
      while (newDirection === this.direction) {
        newDirection =
          randomDirections[Math.floor(Math.random() * randomDirections.length)];
      }
      this.direction = newDirection;
      this.hasCollided = false; // Reset hasCollided setelah mengganti arah
      this.cooldown = this.cooldownMax;
    }
  }

  checkCollision() {
    // Pengecekan tabrakan dengan blok
    this.blockList.forEach((block) => {
      if (
        this.x < block.x + block.width &&
        this.x + this.width > block.x &&
        this.y < block.y + block.height &&
        this.y + this.height > block.y
      ) {
        // Setelah tabrakan, kembalikan posisi Enemy ke sebelum tabrakan
        if (this.direction === "up") {
          this.y = block.y + block.height;
        } else if (this.direction === "down") {
          this.y = block.y - this.height;
        } else if (this.direction === "left") {
          this.x = block.x + block.width;
        } else if (this.direction === "right") {
          this.x = block.x - this.width;
        }

        this.changeDirection();
        this.hasCollided = true; // Set hasCollided setelah tabrakan
      }
    });

    // Pengecekan tabrakan dengan batas canvas
    if (this.x <= 0) {
      this.x = 0;
      this.changeDirection();
      this.hasCollided = true; // Set hasCollided setelah tabrakan
    } else if (this.x >= this.canvas.width - this.width) {
      this.x = this.canvas.width - this.width;
      this.changeDirection();
      this.hasCollided = true; // Set hasCollided setelah tabrakan
    }

    if (this.y <= 0) {
      this.y = 0;
      this.changeDirection();
      this.hasCollided = true; // Set hasCollided setelah tabrakan
    } else if (this.y >= this.canvas.height - this.height) {
      this.y = this.canvas.height - this.height;
      this.changeDirection();
      this.hasCollided = true; // Set hasCollided setelah tabrakan
    }
  }

  updateCooldown() {
    if (this.cooldown > 0) {
      this.cooldown--;
    }
  }
}
