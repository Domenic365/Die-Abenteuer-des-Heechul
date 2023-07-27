class MageBoss extends Enemy {

    constructor(scene, x, y, frame) {
        super(scene, x, y, "Mage_boss", frame);

        scene.physics.add.existing(this, false);
    }

    lifePoints = 6;

    attacking(){
        if(this.isDoing){
            return false
        }
        this.doSomething(ANIM_MAGEBOSSMAGE_BOSS_ATTACK, 700, false, ()=>{
            let fireBallSpeed = -500;
            let fireBall = new Fireball(this.scene, this)
            this.scene.thrownStones.add(fireBall, true);
            if (this.flipX) {
                fireBallSpeed = fireBallSpeed * -1;
            }
            fireBall.setVelocity(fireBallSpeed, -150);
        });
    }

    update(){
        this.attacking();
    }

}