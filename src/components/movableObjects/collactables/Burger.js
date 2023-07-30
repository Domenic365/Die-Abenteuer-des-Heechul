class Burger extends Collactable {
  constructor(scene, x, y, texture, frame) {
    super(scene, x, y, "Hamburger", frame, scene.burger, scene.healthBar);
  }

  collect(player) {
    super.collect(player, "lifePoints");
  }

  music() {
    this.targetScene.eatMusic.play();
  }
}
