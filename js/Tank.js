// Tank.js
export default class Tank {
  moveUp = false;
  moveDown = false;
  moveLeft = false;
  moveRight = false;
  shoot = false;
  bulletDirection = "down"
  limit = false
  bulletLimit = 10

  constructor(canvas, imageSrc, speed, blockList,bulletController) {
    this.canvas = canvas;
    this.image = new Image();
    this.image.src = imageSrc;
    this.x = 0
    this.y = 0
    this.width = 70;
    this.height = 80;
    this.speed = speed;
    this.angle = 180;
    this.blockList = blockList
    this.bulletController = bulletController

    document.addEventListener("keydown", this.keydown.bind(this));
    document.addEventListener("keyup", this.keyup.bind(this));
  }

  draw(ctx) {

    this.move();
    
    // mengecheck koordinat agar objek tidak keluar dari canvas
    if(this.x <= 0){
      this.x = 0
    } else if(this.x >= this.canvas.width){
      this.x = this.canvas.width
    }
    
    if(this.y <= 0){
      this.y = 0
    } else if(this.y >= this.canvas.height - 80){
      this.y = this.canvas.height - 80
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


    if(this.shoot){
      if(this.bulletDirection == "down"){
        this.bulletController.shoot(this.x + this.width / 2 - 5 , this.y +  this.height - 8, 10, this.bulletDirection, 1)
      } if(this.bulletDirection == "up"){ 
        this.bulletController.shoot(this.x + this.width / 2 - 4 , this.y, 10, this.bulletDirection, 1)
      } if(this.bulletDirection == "right"){
        this.bulletController.shoot(this.x + this.width - 8, this.y + this.height / 2 - 4 , 10, this.bulletDirection, 1)
      } if(this.bulletDirection == "left"){
        this.bulletController.shoot(this.x - 3, this.y + this.height / 2 - 6, 10, this.bulletDirection, 1)
      }

      this.shoot = false
      this.limit = true
    }

    let nextX = this.x
    let nextY = this.y

    if (this.moveUp) {
      nextY -= this.speed;
      this.angle = 0; // Mengatur sudut rotasi ke atas
      this.bulletDirection = "up";
    } else if (this.moveDown) {
      nextY += this.speed;
      this.angle = 180; // Mengatur sudut rotasi ke bawah
      this.bulletDirection = "down"
    } else if (this.moveLeft) {
      nextX -= this.speed;
      this.angle = -90; // Mengatur sudut rotasi ke kiri
      this.bulletDirection = "left"; 
    } else if (this.moveRight) {
      nextX += this.speed;
      this.angle = 90; // Mengatur sudut rotasi ke kanan
      this.bulletDirection = "right";
    }

    if(!this.checkCollision(nextX, nextY)){
      this.x = nextX
      this.y = nextY
    }

  }

  checkCollision(nextX, nextY){
    for(const block of this.blockList){
      if(
      nextX < block.x + block.width &&
      nextX + this.width > block.x &&
      nextY < block.y + block.height &&
      nextY + this.height > block.y
      ){
        return true
      }
    }
    return false
  }

  

  keydown(e) {
    if(e.code === "Space" && !this.limit){
      this.shoot = true;
    }
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
    if (e.code === "Space") {
      this.shoot = false;
      this.limit = false
    }
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
