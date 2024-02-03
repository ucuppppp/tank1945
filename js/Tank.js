// Tank.js
export default class Tank {
  moveUp = false;
  moveDown = false;
  moveLeft = false;
  moveRight = false;

  constructor(canvas, imageSrc, speed, blockList) {
    this.canvas = canvas;
    this.image = new Image();
    this.image.src = imageSrc;
    this.x = -10
    this.y = -10
    this.width = 100;
    this.height = 100;
    this.speed = speed;
    this.angle = 180;
    this.blockList = blockList

    document.addEventListener("keydown", this.keydown.bind(this));
    document.addEventListener("keyup", this.keyup.bind(this));
  }

  draw(ctx) {

    this.move();
    
    // mengecheck koordinat agar objek tidak keluar dari canvas
    if(this.x <= -10){
      this.x = -10
    } else if(this.x >= this.canvas.width - 90){
      this.x = this.canvas.width - 90
    }
    
    if(this.y <= -10){
      this.y = -10
    } else if(this.y >= this.canvas.height - 90){
      this.y = this.canvas.height - 90
    }


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

    let nextX = this.x
    let nextY = this.y

    if (this.moveUp) {
      nextY -= this.speed;
      this.angle = 0; // Mengatur sudut rotasi ke atas
    } else if (this.moveDown) {
      nextY += this.speed;
      this.angle = 180; // Mengatur sudut rotasi ke bawah
    } else if (this.moveLeft) {
      nextX -= this.speed;
      this.angle = -90; // Mengatur sudut rotasi ke kiri
    } else if (this.moveRight) {
      nextX += this.speed;
      this.angle = 90; // Mengatur sudut rotasi ke kanan
    }

    if(!this.checkCollision(nextX, nextY)){
      this.x = nextX
      this.y = nextY
    }

  }

  checkCollision(nextX, nextY){
    for(const block of this.blockList){
      if(
      nextX < block.x + block.width - 15 &&
      nextX + this.width > block.x + 15 &&
      nextY < block.y + block.height - 15 &&
      nextY + this.height > block.y + 15
      ){
        return true
      }
    }
    return false
  }



  keydown(e) {
    console.log("X :", this.x)
    console.log("Y :", this.y)
    if (e.code === "ArrowRight" || e.code === 'KeyD') {
      this.moveRight = true;
    }
    if (e.code === "ArrowLeft" || e.code === 'KeyA') {
      this.moveLeft = true;
    }
    if (e.code === "ArrowUp" || e.code === 'KeyW') {
      this.moveUp = true;
    }
    if (e.code === "ArrowDown" || e.code === 'KeyS') {
      this.moveDown = true;
    }
  }

  keyup(e) {
    if (e.code === "ArrowRight" || e.code === 'KeyD') {
      this.moveRight = false;
    }
    if (e.code === "ArrowLeft" || e.code === 'KeyA') {
      this.moveLeft = false;
    }
    if (e.code === "ArrowUp" || e.code === 'KeyW') {
      this.moveUp = false;
    }
    if (e.code === "ArrowDown" || e.code === 'KeyS') {
      this.moveDown = false;
    }
  }
}
