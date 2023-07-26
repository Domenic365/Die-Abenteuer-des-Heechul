
// You can write more code here

/* START OF COMPILED CODE */

class Boot extends Phaser.Scene {

	constructor() {
		super("Boot");

		/* START-USER-CTR-CODE */
		// Write your code here.
		/* END-USER-CTR-CODE */
	}

	/** @returns {void} */
	editorCreate() {

		// text_1
		const text_1 = this.add.text(16, 16, "", {});
		text_1.text = "Loading Game...";

		this.events.emit("scene-awake");
	}

	/* START-USER-CODE */

	// Write your code here

	create() {
		this.editorCreate();
		this.scene.start("level1");
	}

	/* END-USER-CODE */
}

/* END OF COMPILED CODE */

// You can write more code here
