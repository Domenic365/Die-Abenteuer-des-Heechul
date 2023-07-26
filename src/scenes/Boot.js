class Boot extends Phaser.Scene {

	constructor() {
		super("Boot");
	}

	editorCreate() {

		// text_1
		const text_1 = this.add.text(16, 16, "", {});
		text_1.text = "Loading Game...";

		this.events.emit("scene-awake");
	}

	create() {
		this.editorCreate();
		this.scene.start("level1");
	}
}
