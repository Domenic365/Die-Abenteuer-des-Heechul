
// You can write more code here

/* START OF COMPILED CODE */

class Burger extends MovableObjects {

	constructor(scene, x, y, texture, frame) {
		super(scene, x ?? 0, y ?? 0, texture || "Hamburger", frame);

		/* START-USER-CTR-CODE */
		this.scene.burger.add(this);
		/* END-USER-CTR-CODE */
	}

	/* START-USER-CODE */

	// Write your code here.

	/* END-USER-CODE */
}

/* END OF COMPILED CODE */

// You can write more code here
