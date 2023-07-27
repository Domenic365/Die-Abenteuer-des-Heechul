class MageBoss extends Enemy {

    constructor(scene, x, y, frame) {
        super(scene, x, y, "Mage_boss", frame);

        scene.physics.add.existing(this, false);
    }

    lifePoints = 6;

    attacking(){
        this.doSomething(ANIM_MAGEBOSSMAGE_BOSS_ATTACK, 400, false, ()=>{
            let fireBallSpeed = 800;
            let fireBall = new Fireball(this.scene, this)
            this.scene.thrownStones.add(fireBall, true);
            if (this.flipX) {
                fireBallSpeed = -800;
            }
            fireBall.setVelocity(fireBallSpeed, -100);
        });
    }

    update(){
    }

}