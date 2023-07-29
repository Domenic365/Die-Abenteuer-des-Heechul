class RockToThrow extends MovableObjects {
  constructor(scene, character) {
    let x = character.x;
    let y = character.y;

    super(scene, x, y, "Rock1");
    this.damage = 1;
  }

  fellOnGround() {
    this.destroy();
  }
}
