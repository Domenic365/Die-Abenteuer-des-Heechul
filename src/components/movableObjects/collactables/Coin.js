class Coin extends Collactable {
  constructor(scene, x, y, texture, frame) {
    super(scene, x, y, "Coin", frame, scene.coins, scene.coinBar);

    scene.physics.add.existing(this, false);
    this.body.setOffset(8, 0);
    this.body.setSize(16, 32, false);
    this.play(ANIM_COINCOIN);
  }

  collect(player) {
    super.collect(player, "coins");
  }

  music() {
    this.targetScene.coin.play();
  }
}
