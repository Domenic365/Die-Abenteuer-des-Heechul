// You can write more code here

/* START OF COMPILED CODE */

class Bear extends Enemy {

	constructor(scene, x, y, texture, frame) {
		super(scene, x ?? 0, y ?? 0, texture || "Bear", frame);

		scene.physics.add.existing(this, false);
		this.body.setOffset(18, 10);
		this.body.setSize(20, 30, false);

		/* START-USER-CTR-CODE */

        /* END-USER-CTR-CODE */
	}

	/** @type {number} */
	damage = 1;
	/** @type {number} */
	lifePoints = 2;

	/* START-USER-CODE */

	fellOnGround() {
		let isAlive = this.lifePoints > 0;
		if (isAlive && this.isDoing === false) {
			this.move(-10, ANIM_BEARWALK);
		}
	}

    /* END-USER-CODE */
}

/* END OF COMPILED CODE */

// You can write more code here
