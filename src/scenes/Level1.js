
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

		// background
		const background = new BackgroundClass(this);
		this.add.existing(background);

		// GroundLayer
		const groundLayer = new GroundLayer(this);
		this.add.existing(groundLayer);

		// Player
		const player = new Player(this, 20, 30);
		this.add.existing(player);

		this.background = background;
		this.groundLayer = groundLayer;
		this.player = player;

		this.events.emit("scene-awake");
	}

	/** @type {BackgroundClass} */
	background;
	/** @type {GroundLayer} */
	groundLayer;
	/** @type {Player} */
	player;

	/* START-USER-CODE */

	// Write your code here

	create() {
		this.editorCreate();
		console.log(this.groundLayer);
		console.log(this.groundGroup);
		this.physics.add.collider(this.player, this.groundGroup);
	}

	update(){
		this.player.moveCharacter();
	}

	/* END-USER-CODE */
}

/* END OF COMPILED CODE */

// You can write more code here
