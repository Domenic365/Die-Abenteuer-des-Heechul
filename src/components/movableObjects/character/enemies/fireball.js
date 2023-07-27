class Fireball extends MovableObjects {
    constructor(scene, enemy) {
        let x = enemy.x;
        let y = enemy.y;
        super(scene, x, y, "Attack2_3_FireBall");
    }

    damage = 1;
    fellOnGround() {
        this.destroy();
    }
}
