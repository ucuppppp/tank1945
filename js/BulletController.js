import Bullet from "./Bullet.js"

export default class BulletController {
  bullets = [];
  timeTillNextBulletAllowed = 0;

  constructor(canvas, maxBulletAtATime, bulletColor, soundEnabled) {
    this.canvas = canvas;
    this.maxBulletAtATime = maxBulletAtATime;
    this.bulletColor = bulletColor;
    this.soundEnabled = soundEnabled;
    this.shootSound = new Audio("assets/sounds/shoot.wav")
    this.shootSound.volume = 0.5
  }

  // update() {
  //   if (this.timeTillNextBulletAllowed > 0) {
  //     this.timeTillNextBulletAllowed--;
  //   }
  // }

  draw(ctx) {
    this.bullets.forEach((bullet) => bullet.draw(ctx));
  }

  shoot(x, y, speed, direction, timeTillNextBulletAllowed = 0) {
    // if (this.timeTillNextBulletAllowed <= 0 && this.bullets.length < this.maxBulletAtATime) {
      const bullet = new Bullet(this.canvas, x, y, this.bulletColor, speed, direction);
      this.bullets.push(bullet);
       if(this.soundEnabled){
        this.soundEnabled = true
        this.shootSound.currentTime = 0
        this.shootSound.play()
       }
    // }
    this.timeTillNextBulletAllowed = timeTillNextBulletAllowed;
  }
}
