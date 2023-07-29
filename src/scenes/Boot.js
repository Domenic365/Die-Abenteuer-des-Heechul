class Boot extends Phaser.Scene {
  constructor() {
    super("Boot");
  }

  preload() {
    const text_1 = this.add.text(16, 16, "", {});
    text_1.text = "Loading Game...";
    text_1.setFontFamily("Planes_ValMore");
    this.load.pack("boot", "assets/boot.json");
  }

  create() {
    this.scene.start("level1");
  }
}
