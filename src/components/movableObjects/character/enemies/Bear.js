// You can write more code here

/* START OF COMPILED CODE */

class Bear extends Enemy {

	constructor(scene, x, y, texture, frame) {
		super(scene, x ?? 0, y ?? 0, texture || "Bear", frame);

		scene.physics.add.existing(this, false);
		this.body.setSize(40, 40, false);

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
