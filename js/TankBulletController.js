export default class TankBulletController {
  constructor() {
    this.bullets = [];
  }

  addBullet(bullet) {
    this.bullets.push(bullet);
  }

  updateBullets(ctx) {
    for (let i = 0; i < this.bullets.length; i++) {
      this.bullets[i].move();
      this.bullets[i].draw(ctx);
    }
  }
}
