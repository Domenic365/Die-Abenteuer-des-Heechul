class Boot extends Phaser.Scene {

    constructor() {
        super("Boot");
    }

    create() {
        const text_1 = this.add.text(16, 16, "", {});
        text_1.text = "Loading Game...";
        this.scene.start("level1");
    }
}
