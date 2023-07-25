
// You can write more code here

/* START OF COMPILED CODE */

class Spikes extends Phaser.Physics.Arcade.Image {

	constructor(scene, x, y, texture, frame) {
		super(scene, x ?? 0, y ?? 0, texture || "Spikes2_1", frame);

		scene.physics.add.existing(this, true);
		this.body.setOffset(0, 5);
		this.body.setSize(32, 25, false);

		/* START-USER-CTR-CODE */
		this.scene.spikes.add(this);
		/* END-USER-CTR-CODE */
	}

	/* START-USER-CODE */

	// Write your code here.

	/* END-USER-CODE */
}

/* END OF COMPILED CODE */

// You can write more code here
