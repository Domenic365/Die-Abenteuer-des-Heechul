class Fireball extends MovableObjects {
    constructor(scene, enemy) {
        let x = enemy.x;
        let y = enemy.y;
        super(scene, x, y, "");
    }

    damage = 1;
    fellOnGround() {
        this.destroy();
    }
}
