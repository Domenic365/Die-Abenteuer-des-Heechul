class Collactable extends MovableObjects {
  constructor(scene, x, y, texture, frame, group, bar) {
    super(scene, x, y, texture, frame);
    this.bar = bar;
    group.add(this);

    this.targetScene = scene;
  }

  collectItem(newCount) {
    this.destroy();
    this.bar.setFrame(newCount);
  }

  collect(player, type) {
    if (player.checkCollection(player[type])) {
      player[type]++;
      this.collectItem(player[type]);
      this.music();
    }
  }
}
