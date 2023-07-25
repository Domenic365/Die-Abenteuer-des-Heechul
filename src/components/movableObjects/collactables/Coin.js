
// You can write more code here

/* START OF COMPILED CODE */

class Coin extends MovableObjects {

	constructor(scene, x, y, texture, frame) {
		super(scene, x ?? 0, y ?? 0, texture || "Coin", frame ?? 0);

		scene.physics.add.existing(this, false);
		this.body.setOffset(8, 0);
		this.body.setSize(16, 32, false);

		/* START-USER-CTR-CODE */		
		this.play(ANIM_COINCOIN);
		this.scene.coins.add(this);
		/* END-USER-CTR-CODE */
	}

	/* START-USER-CODE */

	// Write your code here.

	/* END-USER-CODE */
}

/* END OF COMPILED CODE */

// You can write more code here
