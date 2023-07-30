class Boot extends Phaser.Scene {
  constructor() {
    super("Boot");
  }

  preload() {
    const text_1 = this.add.text(16, 16, "", {});
    text_1.text = "Loading Game...";
    text_1.setFontFamily("Planes_ValMore");
    this.load.pack("boot", "assets/boot.json");

    const width = this.cameras.main.width;
    const height = this.cameras.main.height;
    const x = width / 2;
    const y = height / 2;
    this.loadingBar = this.add.graphics({ x, y });

    this.percentageText = this.add.text(x, y, "0%", {
      fontFamily: "Planes_ValMore",
      fontSize: "24px",
      color: "#000000",
    });
    this.percentageText.setOrigin(0.5);

    this.load.on("progress", this.showLoadingBar, this);
  }

  showLoadingBar(percentage) {
    this.loadingBar.clear();

    const width = 250;
    const height = 30;
    const fill = percentage * width;
    this.loadingBar.fillStyle(0xffffff);
    this.loadingBar.fillRect(-width / 2, -height / 2, fill, height);

    const percentageDisplay = Math.floor(percentage * 100) + "%";
    this.percentageText.setText(percentageDisplay);
  }

  create() {
    this.scene.start("level1");
  }
}
