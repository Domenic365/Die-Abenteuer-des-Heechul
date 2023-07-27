class EnemyStop extends Phaser.GameObjects.Image {

    constructor(scene, x, y, texture, frame) {
        super(scene, x ?? 0, y ?? 0, texture || "__DEFAULT", frame);

        scene.enemyStop.add(this);
        scene.add.existing(this);
    }


}
