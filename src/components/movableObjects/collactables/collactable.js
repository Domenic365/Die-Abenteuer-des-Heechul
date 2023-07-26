class Collactable extends MovableObjects {
    constructor(scene, x, y, texture, frame, group, bar, type) {
        super(scene, x, y, texture, frame);
        this.bar = bar;
        this.type = type;
        group.add(this);
    }

    collectItem(newCount) {
        this.destroy();
        this.bar.setFrame(newCount);
    }

    collect() {
        const player = this.scene.player;
        switch (this.type) {
            case "rock":
                if (player.checkCollection(player.stones)) {
                    player.stones++;
                    this.collectItem(player.stones);
                }
                break;
            case "coin":
                if (player.checkCollection(player.coins)) {
                    player.coins++;
                    this.collectItem(player.coins);
                }
                break;
            case "burger":
                if (player.checkCollection(player.lifePoints)) {
                    player.lifePoints++;
                    this.collectItem(player.lifePoints);
                }
                break;
        }
    }
}