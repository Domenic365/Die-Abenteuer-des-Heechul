class MovableObjects extends Phaser.Physics.Arcade.Sprite {
  constructor(scene, x, y, texture, frame) {
    super(scene, x, y, texture, frame);
    this.init();
    this.addColliderGround();
    scene.add.existing(this);
  }

  addColliderGround() {
    this.scene.physics.add.collider(this, this.scene.groundGroup, () => {
      this.fellOnGround();
    });
  }

  init() {
    this.isJumped = false;
    this.isDoing = false;
    this.isDead = false;
  }

  move(speed, animationKey, flip) {
    this.body.setVelocityX(speed);
    this.play(animationKey, true);
    if (flip !== undefined) {
      this.setFlipX(flip);
    }
  }

  jump(speed, animationKey) {
    if (this.isJumped === false) {
      this.play(animationKey, true);
      this.body.setVelocityY(speed);
      this.isJumped = true;
    }
  }

  fellOnGround() {
    this.isJumped = false;
  }

  gotHit(damage, hitAnimKey, deathAnimKey, funBeforeAnim, funAfterAnim) {
    if (!this.isInvincible) {
      this.lifePoints -= damage;
    }
    this.isDead = this.lifePoints < 1;
    if (this.isDead) {
      this.doSomething(deathAnimKey, 650, funBeforeAnim, (object) => {
        object.destroy();
        if (funAfterAnim) {
          funAfterAnim(this);
        }
      });
    } else {
      this.doSomething(hitAnimKey, 400, funBeforeAnim, funAfterAnim);
    }
  }

  doSomething(animKey, timeInMs, funBeforeAnim, funAfterAnim) {
    if (this.isDoing && this.isDead === false) {
      return false;
    }
    this.isDoing = true;
    if (funBeforeAnim) {
      funBeforeAnim(this);
    }
    this.play(animKey, true);
    setTimeout(() => {
      this.isDoing = false;
      if (funAfterAnim) {
        funAfterAnim(this);
      }
    }, timeInMs);
  }
}
