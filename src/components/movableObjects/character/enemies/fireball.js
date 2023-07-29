class Fireball extends Enemy {
  constructor(scene, enemy) {
    let x = enemy.x;
    let y = enemy.y;
    super(scene, x, y, "Attack2_3_FireBall");
    this.body.setSize(5, 5, false);
  }

  damage = 1;

  fellOnGround() {
    this.destroy();
  }

  gotHit() {
    return false;
  }
}
