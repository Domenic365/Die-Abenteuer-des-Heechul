class Spikes extends Phaser.Physics.Arcade.Image {
  constructor(scene, x, y, texture, frame) {
    super(scene, x ?? 0, y ?? 0, texture || "Spikes2_1", frame);

    scene.physics.add.existing(this, true);
    this.body.setOffset(0, 5);
    this.body.setSize(32, 25, false);

    this.scene.spikes.add(this);
  }
}
