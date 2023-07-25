
// You can write more code here

/* START OF COMPILED CODE */

class BackgroundClass extends Phaser.GameObjects.Layer {

	constructor(scene) {
		super(scene);

		// tilesprite_1
		const tilesprite_1 = scene.add.tileSprite(0, 0, 4672, 324, "8");
		tilesprite_1.setOrigin(0, 0);
		this.add(tilesprite_1);

		// tilesprite_2
		const tilesprite_2 = scene.add.tileSprite(0, 0, 4672, 324, "7");
		tilesprite_2.setOrigin(0, 0);
		this.add(tilesprite_2);

		// tilesprite
		const tilesprite = scene.add.tileSprite(0, 0, 4672, 324, "6");
		tilesprite.setOrigin(0, 0);
		this.add(tilesprite);

		// tilesprite_3
		const tilesprite_3 = scene.add.tileSprite(0, 0, 4672, 324, "5");
		tilesprite_3.setOrigin(0, 0);
		this.add(tilesprite_3);

		// tilesprite_4
		const tilesprite_4 = scene.add.tileSprite(0, 0, 4672, 324, "4");
		tilesprite_4.setOrigin(0, 0);
		this.add(tilesprite_4);

		// tilesprite_5
		const tilesprite_5 = scene.add.tileSprite(0, 0, 4672, 324, "3");
		tilesprite_5.setOrigin(0, 0);
		this.add(tilesprite_5);

		// tilesprite_6
		const tilesprite_6 = scene.add.tileSprite(0, 0, 4672, 324, "2");
		tilesprite_6.setOrigin(0, 0);
		this.add(tilesprite_6);

		// tilesprite_7
		const tilesprite_7 = scene.add.tileSprite(0, 0, 4672, 324, "1");
		tilesprite_7.setOrigin(0, 0);
		this.add(tilesprite_7);

		this.tilesprite_1 = tilesprite_1;
		this.tilesprite_2 = tilesprite_2;
		this.tilesprite = tilesprite;
		this.tilesprite_3 = tilesprite_3;
		this.tilesprite_4 = tilesprite_4;
		this.tilesprite_5 = tilesprite_5;
		this.tilesprite_6 = tilesprite_6;
		this.tilesprite_7 = tilesprite_7;

		/* START-USER-CTR-CODE */
		/* END-USER-CTR-CODE */
	}

	/** @type {Phaser.GameObjects.TileSprite} */
	tilesprite_1;
	/** @type {Phaser.GameObjects.TileSprite} */
	tilesprite_2;
	/** @type {Phaser.GameObjects.TileSprite} */
	tilesprite;
	/** @type {Phaser.GameObjects.TileSprite} */
	tilesprite_3;
	/** @type {Phaser.GameObjects.TileSprite} */
	tilesprite_4;
	/** @type {Phaser.GameObjects.TileSprite} */
	tilesprite_5;
	/** @type {Phaser.GameObjects.TileSprite} */
	tilesprite_6;
	/** @type {Phaser.GameObjects.TileSprite} */
	tilesprite_7;

	/* START-USER-CODE */

	update() {
		let scrollfactor = 0.08;
		this.tilesprite.tilePositionX = this.scene.cameras.main.scrollX * scrollfactor;
		this.tilesprite_1.tilePositionX = this.scene.cameras.main.scrollX * scrollfactor;
		this.tilesprite_2.tilePositionX += .1;
		this.tilesprite_3.tilePositionX = this.scene.cameras.main.scrollX * scrollfactor;
		this.tilesprite_4.tilePositionX = this.scene.cameras.main.scrollX * scrollfactor;
		this.tilesprite_5.tilePositionX = this.scene.cameras.main.scrollX * scrollfactor;
		this.tilesprite_6.tilePositionX = this.scene.cameras.main.scrollX * scrollfactor;
		this.tilesprite_7.tilePositionX = this.scene.cameras.main.scrollX * scrollfactor;

	}

	/* END-USER-CODE */
}

/* END OF COMPILED CODE */

// You can write more code here
