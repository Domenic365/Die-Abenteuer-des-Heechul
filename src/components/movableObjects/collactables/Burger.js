class Burger extends Collactable {
  constructor(scene, x, y, texture, frame) {
    super(
      scene,
      x,
      y,
      "Hamburger",
      frame,
      scene.burger,
      scene.healthBar,
      "burger",
    );
  }

  music() {
    this.targetScene.eatMusic.play();
  }
}
