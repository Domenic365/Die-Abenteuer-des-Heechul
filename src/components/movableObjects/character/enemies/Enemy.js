class Enemy extends MovableObjects {
  constructor(scene, x, y, texture, frame) {
    super(scene, x, y, texture, frame);
    scene.physics.add.existing(this, false);
    scene.enemies.add(this);
  }

  damage = 1;

  stop() {
    this.speed = this.speed * -1;
    this.move(this.speed, ANIM_BEARWALK, !this.flipX);
  }

  gotHit(damage, hitAnimKey, deathAnimKey, funBeforeAnim, funAfterAnim) {
    this.setVelocityX(0);
    super.gotHit(damage, hitAnimKey, deathAnimKey, funBeforeAnim, funAfterAnim);
  }
}
