class GroundGroup extends Phaser.Physics.Arcade.StaticGroup {
  constructor(scene, children) {
    super(scene.physics.world, scene, children);
    this.addToScene();
    this.scene.physics.world.enable(this);
  }

  addToScene() {
    this.scene.add.existing(this);
  }
}
