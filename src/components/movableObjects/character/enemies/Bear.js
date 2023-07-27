class Bear extends Enemy {

    constructor(scene, x, y, texture, frame) {
        super(scene, x, y, "Bear", frame);
        scene.physics.add.existing(this, false);
        this.body.setOffset(10, 10);
        this.body.setSize(20, 30, false);
    }


    lifePoints = 2;
    speed = -10;

    fellOnGround() {
        let isAlive = this.lifePoints > 0;
        if (isAlive && this.isDoing === false) {
            this.move(this.speed, ANIM_BEARWALK);
        }
    }

    gotHit(damage) {
        super.gotHit(damage, ANIM_BEARHURT, ANIM_BEARDEATH);
    }
}
