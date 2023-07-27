class Bar extends Phaser.GameObjects.Sprite {
    constructor(scene, x, y, texture, frame) {
        super(scene, x, y, texture, frame);
        this.setScrollFactor(0, 0);
        scene.add.existing(this);
    }
}