export default class EnemyController {
  constructor() {
    this.enemies = [];
  }

  addEnemy(enemy) {
    this.enemies.push(enemy);
  }

  updateEnemies(ctx) {
    for (let i = 0; i < this.enemies.length; i++) {
      this.enemies[i].move();
      this.enemies[i].draw(ctx);
    }
  }
}
