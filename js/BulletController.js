import Bullet from "./Bullet.js";

export default class BulletController {
  bullets = [];
  timeTillNextBulletAllowed = 0;

  constructor(canvas, maxBulletAtATime, bulletColor, soundEnabled, shootSoundSrc) {
    this.canvas = canvas;
    this.maxBulletAtATime = maxBulletAtATime;
    this.bulletColor = bulletColor;
    this.soundEnabled = soundEnabled;
    this.shootSound = new Audio();
    this.shootSound.src = shootSoundSrc;
    this.shootSound.volume = 0.5;
    this.gameOver = false;
  }

  draw(ctx, blockList, enemies, players) {
    if(enemies.length === 0) {
      this.gameOver = true;
    }
    this.bullets = this.bullets.filter((bullet) => !bullet.destroyed);
    this.bullets.forEach((bullet) => bullet.draw(ctx, blockList, enemies, players));
  }

  shoot(x, y, speed, direction, timeTillNextBulletAllowed = 0) {
    if (this.bullets.length < this.maxBulletAtATime) {
      const bullet = new Bullet(
        this.canvas,
        x,
        y,
        this.bulletColor,
        speed,
        direction
      );
      this.bullets.push(bullet);
      if (this.soundEnabled) {
        this.shootSound.currentTime =  0;
        this.shootSound.play();
      }
    }
    this.timeTillNextBulletAllowed = timeTillNextBulletAllowed;
  }
}
