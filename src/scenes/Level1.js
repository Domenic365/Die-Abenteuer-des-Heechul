
// You can write more code here

/* START OF COMPILED CODE */

class Level1 extends Phaser.Scene {

	constructor() {
		super("level1");

		/* START-USER-CTR-CODE */
		// Write your code here.
		/* END-USER-CTR-CODE */
	}

	/** @returns {void} */
	preload() {

		this.load.pack("boot", "assets/boot.json");
	}

	/** @returns {void} */
	editorCreate() {

		// GroundLayer
		const groundLayer = this.add.layer();

		// background
		const background = new BackgroundClass(this);
		this.add.existing(background);

		// Player
		const player = new Player(this, 186, 119);
		this.add.existing(player);

		this.groundLayer = groundLayer;
		this.background = background;

		this.events.emit("scene-awake");
	}

	/** @type {Phaser.GameObjects.Layer} */
	groundLayer;
	/** @type {BackgroundClass} */
	background;

	/* START-USER-CODE */

	// Write your code here

	create() {
		this.editorCreate();
	}

	/* END-USER-CODE */
}

/* END OF COMPILED CODE */

// You can write more code here
