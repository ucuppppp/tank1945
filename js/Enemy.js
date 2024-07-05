export default class Enemy {
  constructor(canvas, x, y, imageSrc, speed, direction) {
    this.canvas = canvas;
    this.x = x;
    this.y = y;
    this.width = 100;
    this.height = 100;
    this.image = new Image();
    this.image.src = imageSrc;
    this.direction = direction;
    this.speed = speed;
  }

  draw(ctx) {
    this.move();

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
      this.angle = 0; // Mengatur sudut rotasi ke atas
      this.y -= this.speed;
      this.checkCollision();
      this.bulletDirection = "up";
    } else if (this.direction === "down") {
      this.angle = 180; // Mengatur sudut rotasi ke bawah
      this.y += this.speed;
      this.checkCollision();
      this.bulletDirection = "down";
    } else if (this.direction === "left") {
      this.angle = -90; // Mengatur sudut rotasi ke kiri
      this.x -= this.speed;
      this.checkCollision();
      this.bulletDirection = "left";
    } else if ((this.direction = "right")) {
      this.angle = 90; // Mengatur sudut rotasi ke kanan
      this.x += this.speed;
      this.checkCollision();
      this.bulletDirection = "right";
    }
  }

  changeDirection() {
    const randomDirections = ["up", "down", "left", "right"];
    let newDirection = this.direction;
    while (newDirection === this.direction) {
      newDirection =
        randomDirections[Math.floor(Math.random() * randomDirections.length)];
    }
    this.direction = newDirection;
  }

  checkCollision() {
    if (this.x <= -10) {
      this.x = -10;
      this.changeDirection();
    } else if (this.x >= this.canvas.width - 90) {
      this.x = this.canvas.width - 85;
      this.changeDirection();
    }

    if (this.y <= -10) {
      this.y = -10;
      this.changeDirection();
    } else if (this.y >= this.canvas.height - 90) {
      this.y = this.canvas.height - 70;
      this.changeDirection();
    }
  }
}
