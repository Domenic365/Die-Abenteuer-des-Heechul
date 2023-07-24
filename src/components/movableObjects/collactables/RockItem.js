// You can write more code here

/* START OF COMPILED CODE */

class RockItem extends MovableObjects {

	constructor(scene, x, y, texture, frame) {
		super(scene, x ?? 0, y ?? 0, texture || "Rock2", frame);

		scene.physics.add.existing(this, false);
		this.body.setSize(16, 16, false);

		/* START-USER-CTR-CODE */
		scene.stones.add(this);
        /* END-USER-CTR-CODE */
	}

	/* START-USER-CODE */

    // Write your code here.

    /* END-USER-CODE */
}

/* END OF COMPILED CODE */

// You can write more code here
