
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

	/** @type {number} */
	stones = 0;
	/** @type {number} */
	maxStones = 3;
	/** @type {number} */
	lifePoints = 3;
	/** @type {number} */
	damage = 2;
	/** @type {number} */
	speed = 100;
	/** @type {number} */
	jumpSpeed = -350;
	/** @type {number} */
	knockback = -100;

	/* START-USER-CODE */

	collectStone() {
        this.stones++;
        this.scene.stoneBar.setFrame(this.stones);
    }

    addCameraSettings() {
        let camera = this.scene.cameras.main;
        camera.startFollow(this, false, 1, 0);
        camera.setScroll(0, 0);
        camera.setBounds(0, 0, 2528, game.config.height);
    }

    createKeys() {
        let keyboard = this.scene.input.keyboard;
        this.cursorkeys = keyboard.createCursorKeys();
        keyboard.on("keydown-SPACE", this.throwStone());
        keyboard.on("keydown-UP", () => {
            this.jump(this.jumpSpeed, ANIM_JUMPDUDE);
        });
    }

    throwStone() {
        return () => {
            const hasStones = this.stones > 0;
            if (hasStones) {
                this.doSomething(ANIM_ATTACKDUDE, 300, false, () => {
                    this.scene.throwGroup.add(new RockClass(this.scene, this));
                    this.stones--;
                    this.scene.stoneBar.setFrame(this.stones);
                });
            }
        };
    }

    moveCharacter() {
        if (this.isDoing === false) {
            if (this.cursorkeys.right.isDown === true) {
                this.move(this.speed, ANIM_WALKDUDE, false);
            } else if (this.cursorkeys.left.isDown === true) {
                this.move(-this.speed, ANIM_WALKDUDE, true);
            } else if (this.isJumped === false) {
                this.move(0, ANIM_IDLEDUDE);
            }
        }
    }

	/* END-USER-CODE */
}

/* END OF COMPILED CODE */

// You can write more code here
