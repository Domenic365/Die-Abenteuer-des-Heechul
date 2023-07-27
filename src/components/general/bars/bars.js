class Bars extends Phaser.GameObject.Sprite {
    constructor(scene, x, y, texture) {
        super(scene, x, y, texture);
        this.setScrollfactor(0, 0);
        scene.add.existing(this);
    }
}