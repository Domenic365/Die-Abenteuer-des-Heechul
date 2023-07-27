class MageBoss extends Enemy {

    constructor(scene, x, y, frame) {
        super(scene, x, y, "Mage_boss", frame);

        scene.physics.add.existing(this, false);
    }

    lifePoints = 6;
    status = "attacking";

    attacking() {
        if (this.isDoing && this.isAttacking) {
            return false;
        }
        this.doSomething(ANIM_MAGEBOSSMAGE_BOSS_ATTACK, 650, false, () => {
            let fireBallSpeed = -500;
            let fireBall = new Fireball(this.scene, this)
            this.scene.thrownStones.add(fireBall, true);
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
        });
    }

    run() {
        this.move(-100, ANIM_MAGEBOSSMAGE_BOSS_RUN);
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