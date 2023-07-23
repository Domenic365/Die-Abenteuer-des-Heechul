
// You can write more code here

/* START OF COMPILED CODE */

class BackgroundClass extends Phaser.GameObjects.Layer {

	constructor(scene) {
		super(scene);

		// tilesprite_1
		const tilesprite_1 = scene.add.tileSprite(0, 0, 576, 324, "8");
		tilesprite_1.setOrigin(0, 0);
		this.add(tilesprite_1);

		// tilesprite_2
		const tilesprite_2 = scene.add.tileSprite(0, 0, 576, 324, "7");
		tilesprite_2.setOrigin(0, 0);
		this.add(tilesprite_2);

		// tilesprite
		const tilesprite = scene.add.tileSprite(0, 0, 576, 324, "6");
		tilesprite.setOrigin(0, 0);
		this.add(tilesprite);

		/* START-USER-CTR-CODE */
		// Write your code here.
		/* END-USER-CTR-CODE */
	}

	/* START-USER-CODE */

	// Write your code here.

	/* END-USER-CODE */
}

/* END OF COMPILED CODE */

// You can write more code here
