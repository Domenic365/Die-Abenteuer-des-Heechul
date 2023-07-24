
// You can write more code here

/* START OF COMPILED CODE */

class Player extends MovableObjects {

	constructor(scene, x, y, texture, frame) {
		super(scene, x ?? 0, y ?? 0, texture || "Dude_Monster", frame);

		scene.physics.add.existing(this, false);
		this.body.setSize(32, 32, false);

		/* START-USER-CTR-CODE */
		this.createKeys();
		/* END-USER-CTR-CODE */
	}

	/* START-USER-CODE */

	    createKeys() {
        let keyboard = this.scene.input.keyboard;
        this.cursorkeys = keyboard.createCursorKeys();
//        keyboard.on("keydown-SPACE", this.throwStone());
        keyboard.on("keydown-UP", () => {
//            this.jump(this.jumpSpeed, "characterJumpAnim");
        });
    }

	    moveCharacter() {
        if (this.isDoing === false) {
            if (this.cursorkeys.right.isDown === true) {
				console.log("Du Hurensohn");
//                this.move(this.speed, "characterRunAnim", false);
            } else if (this.cursorkeys.left.isDown === true) {
//                this.move(-this.speed, "characterRunAnim", true);
            } else if (this.isJumped === false) {
//                this.move(0, "characterIdleAnim");
            }
        }
    }

	/* END-USER-CODE */
}

/* END OF COMPILED CODE */

// You can write more code here
