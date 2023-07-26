
// You can write more code here

/* START OF COMPILED CODE */

class EnemyStop extends Phaser.GameObjects.Image {

	constructor(scene, x, y, texture, frame) {
		super(scene, x ?? 0, y ?? 0, texture || "__DEFAULT", frame);

		/* START-USER-CTR-CODE */
		this.scene.enemyStop.add(this);
		/* END-USER-CTR-CODE */
	}

	/* START-USER-CODE */

	// Write your code here.

	/* END-USER-CODE */
}

/* END OF COMPILED CODE */

// You can write more code here
