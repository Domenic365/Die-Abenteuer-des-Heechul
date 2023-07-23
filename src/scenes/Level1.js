
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

		// level1
		const level1 = this.add.tilemap("level1");
		level1.addTilesetImage("overworld", "TileSet");
		level1.addTilesetImage("overworldBack", "Back_TileSet");

		// background
		const background = new BackgroundClass(this);
		this.add.existing(background);

		// foregroundBack_1
		level1.createLayer("foregroundBack", ["overworldBack"], 4, 139);

		// foreground_1
		level1.createLayer("foreground", ["overworld"], 2, 131);

		this.level1 = level1;

		this.events.emit("scene-awake");
	}

	/** @type {Phaser.Tilemaps.Tilemap} */
	level1;

	/* START-USER-CODE */

	// Write your code here

	create() {

		this.editorCreate();
	}

	/* END-USER-CODE */
}

/* END OF COMPILED CODE */

// You can write more code here
