class MageBoss extends Enemy {

    constructor(scene, x, y, frame) {
        super(scene, x, y, "Mage_boss", frame);

        scene.physics.add.existing(this, false);
        this.body.setOffset(10, 0);
        this.body.setSize(30, 64, false);
        this.visible = false;
    }

    lifePoints = 6;
    status = "";
    speed = -200;

    attacking() {
        if (this.isDoing && this.isAttacking) {
            return false;
        }
        this.doSomething(ANIM_MAGEBOSSMAGE_BOSS_ATTACK, 650, false, () => {
            let fireBallSpeed = -500;
            let fireBall = new Fireball(this.scene, this);
            fireBall.setGravity(0);
            this.scene.fireballs.add(fireBall, true);
            if (this.flipX) {
                fireBallSpeed = fireBallSpeed * -1;
            }
            fireBall.setVelocity(fireBallSpeed, -150);
        });
    }

    gotHit(damage) {
        this.isDoing = false;
        this.status = "gotHit";
        super.gotHit(damage, ANIM_MAGEBOSSMAGE_BOSS_HURT, ANIM_MAGEBOSSMAGE_BOSS_DEATH, false, () => {
            this.status = "run";
            if (this.isDead) {
                game.scene.scenes[2].gameOver();
            }
        });
    }

    run() {
        this.move(this.speed, ANIM_MAGEBOSSMAGE_BOSS_RUN);
    }

    stop() {
        this.speed = this.speed * -1;
        this.move(this.speed, ANIM_BEARWALK, !this.flipX);
    }

    update() {
        if (this.isDead === true) {
            return false;
        }
        switch (this.status) {
            case "attacking":
                this.attacking();
                break;
            case "run":
                this.run();
                break;
        }
    }

}