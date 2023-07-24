class Enemy extends MovableObjects {
    constructor(scene, x, y, texture, frame) {
        super(scene, x, y, texture, frame);

        scene.physics.add.existing(this, false);
    }
}
