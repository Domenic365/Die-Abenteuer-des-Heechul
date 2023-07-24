class MovableObjects extends Phaser.Physics.Arcade.Sprite {
    constructor(scene, x, y, texture, frame) {
        super(scene, x, y, texture, frame);
        this.init();
        this.addColliderGround();
    }

    addColliderGround() {
        this.scene.physics.add.collider(this, this.scene.groundGroup);
    }

    init() {
        this.isJumped = false;
        this.isDoing = false;
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
        this.lifePoints -= damage;
        let isDead = this.lifePoints < 1;
        if (isDead) {
            this.doSomething(deathAnimKey, 400, funBeforeAnim, (object) => {
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
