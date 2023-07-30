class TouchControl extends Phaser.GameObjects.Image {
  constructor(scene, x, y, texture, type) {
    super(scene, x, y, texture);
    this.type = type;
    scene.add.existing(this);
    this.setScrollFactor(0);
    this.touchToggle();
  }

  touchToggle() {
    this.setInteractive(true, () => {
      for (const pointer of this.scene.game.input.pointers) {
        if (pointer.isDown) {
          const [obj] = this.scene.input.hitTestPointer(pointer);
          if (obj === this) {
            console.log("juhu");
          }
        }
      }
      //let player = this.scene.player;
      //player[this.type] = !player[this.type];
      //console.log(player[this.type]);
    });
  }
}
