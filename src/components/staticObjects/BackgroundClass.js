class BackgroundClass extends Phaser.GameObjects.Layer {
  constructor(scene) {
    super(scene);
    scene.add.existing(this);

    this.tileSprites = [];

    for (let i = 8; i >= 1; i--) {
      const tilesprite = scene.add.tileSprite(0, 0, 4672, 324, i.toString());
      tilesprite.setOrigin(0, 0);
      this.add(tilesprite);
      this.tileSprites.push(tilesprite);
    }
  }

  update() {
    const scrollfactor = 0.1;
    const mainScrollX = this.scene.cameras.main.scrollX * scrollfactor;

    for (const tilesprite of this.tileSprites) {
      tilesprite.tilePositionX = mainScrollX;
      this.tileSprites[1].x -= 0.04;
    }
  }
}
