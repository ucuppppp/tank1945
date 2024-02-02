// Tank.js
export default class Tank {
  moveUp = false;
  moveDown = false;
  moveLeft = false;
  moveRight = false;

  constructor(canvas, imageSrc, speed) {
    this.canvas = canvas;
    this.image = new Image();
    this.image.src = imageSrc;
    this.x = 50;
    this.y = 50;
    this.width = 100;
    this.height = 100;
    this.speed = speed;
    this.angle = 0;

    document.addEventListener("keydown", this.keydown.bind(this));
    document.addEventListener("keyup", this.keyup.bind(this));
  }

  draw(ctx) {
    this.move();

    // Simpan transformasi saat ini
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
    if (this.moveUp) {
      this.y -= this.speed;
      this.angle = 0; // Mengatur sudut rotasi ke atas
    } else if (this.moveDown) {
      this.y += this.speed;
      this.angle = 180; // Mengatur sudut rotasi ke bawah
    } else if (this.moveLeft) {
      this.x -= this.speed;
      this.angle = -90; // Mengatur sudut rotasi ke kiri
    } else if (this.moveRight) {
      this.x += this.speed;
      this.angle = 90; // Mengatur sudut rotasi ke kanan
    }
  }

  keydown(e) {
    if (e.code === "ArrowRight" || e.code === 'd') {
      this.moveRight = true;
    }
    if (e.code === "ArrowLeft" || e.code === 'a') {
      this.moveLeft = true;
    }
    if (e.code === "ArrowUp" || e.code === 'w') {
      this.moveUp = true;
    }
    if (e.code === "ArrowDown" || e.code === 's') {
      this.moveDown = true;
    }
  }

  keyup(e) {
    if (e.code === "ArrowRight" || e.code === 'd') {
      this.moveRight = false;
    }
    if (e.code === "ArrowLeft" || e.code === 'a') {
      this.moveLeft = false;
    }
    if (e.code === "ArrowUp" || e.code === 'w') {
      this.moveUp = false;
    }
    if (e.code === "ArrowDown" || e.code === 's') {
      this.moveDown = false;
    }
  }
}
