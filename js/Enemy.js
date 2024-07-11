export default class Enemy {
  constructor(
    canvas,
    x,
    y,
    imageSrc,
    speed,
    direction,
    cooldownMoveMax,
    cooldownMaxShoot,
    blockList,
    bulletController
  ) {
    this.canvas = canvas;
    this.x = x;
    this.y = y;
    this.width = 70;
    this.height = 80;
    this.image = new Image();
    this.image.src = imageSrc;
    this.direction = direction; 
    this.bulletDirection = this.direction;
    this.speed = speed;
    this.hasCollided = false;
    this.cooldownMove = 0;
    this.cooldownMoveMax = cooldownMoveMax;
    this.blockList = blockList;
    this.bulletController = bulletController;
    this.cooldownMaxShoot = cooldownMaxShoot;
    this.cooldownShoot = cooldownMaxShoot;
    this.damage = 1;
    this.health = 1;
  }

  draw(ctx) {
    this.move();
    this.updateCooldownMove();
    this.updateCooldownShoot();

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

    // console.log(this.cooldownShoot);

    if (this.cooldownShoot === 0) {
      if (this.bulletDirection === "down") {
        this.bulletController.shoot(
          this.x + this.width / 2 - 5,
          this.y + this.height - 8,
          3,
          this.bulletDirection,
          1
        );
      }
      if (this.bulletDirection === "up") {
        this.bulletController.shoot(
          this.x + this.width / 2 - 4,
          this.y,
          3,
          this.bulletDirection,
          1
        );
      }
      if (this.bulletDirection === "right") {
        this.bulletController.shoot(
          this.x + this.width - 8,
          this.y + this.height / 2 - 4,
          2,
          this.bulletDirection,
          1
        );
      }
      if (this.bulletDirection === "left") {
        this.bulletController.shoot(
          this.x - 3,
          this.y + this.height / 2 - 6,
          3,
          this.bulletDirection,
          1
        );
      }

      this.cooldownShoot = this.cooldownMaxShoot;
    }

    if (this.direction === "up") {
      this.angle = 0; // Sudut rotasi ke atas
      this.bulletDirection = "up";
      this.y -= this.speed;
    } else if (this.direction === "down") {
      this.angle = 180; // Sudut rotasi ke bawah
      this.bulletDirection = "down";
      this.y += this.speed;
    } else if (this.direction === "left") {
      this.angle = -90; // Sudut rotasi ke kiri
      this.bulletDirection = "left";
      this.x -= this.speed;
    } else if (this.direction === "right") {
      this.angle = 90; // Sudut rotasi ke kanan
      this.bulletDirection = "right";
      this.x += this.speed;
     }
    this.checkCollision();
  }

  changeDirection() {
    if (this.cooldownMove === 0) {
      const randomDirections = ["up", "down", "left", "right"];
      let newDirection = this.direction;
      while (newDirection === this.direction) {
        newDirection =
          randomDirections[Math.floor(Math.random() * randomDirections.length)];
      }
      this.direction = newDirection;
      this.hasCollided = false; // Reset hasCollided setelah mengganti arah
      this.cooldownMove = this.cooldownMoveMax;
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




  updateCooldownMove() {
    if (this.cooldownMove > 0) {
      this.cooldownMove--;
      // console.log(this.cooldownMove);
    }
  }
  updateCooldownShoot() {
    if (this.cooldownShoot > 0) {
      this.cooldownShoot--;
      // console.log(this.cooldownShoot);
    }
  }
}
