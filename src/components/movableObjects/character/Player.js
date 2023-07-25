// You can write more code here

/* START OF COMPILED CODE */

class Player extends MovableObjects {

	constructor(scene, x, y, texture, frame) {
		super(scene, x ?? 0, y ?? 0, texture || "Dude_Monster", frame);

		scene.physics.add.existing(this, false);
		this.body.collideWorldBounds = true;
		this.body.setOffset(8, 0);
		this.body.setSize(16, 32, false);

		/* START-USER-CTR-CODE */
        this.createKeys();
        this.addCameraSettings();
        /* END-USER-CTR-CODE */
	}

	/** @type {number} */
	stones = 0;
	/** @type {number} */
	maxStone = 3;
	/** @type {number} */
	lifePoints = 3;
	/** @type {number} */
	damage = 2;
	/** @type {number} */
	speed = 100;
	/** @type {number} */
	jumpSpeed = -400;
	/** @type {number} */
	knockback = -100;
	/** @type {number} */
	coins = 0;
	/** @type {number} */
	maxCoins = 3;
	/** @type {number} */
	maxLifePoints = 3;

	/* START-USER-CODE */

    collectStone() {
        this.stones++;
        this.scene.stoneBar.setFrame(this.stones);
    }

    collectCoin() {
        this.coins++;
        this.scene.coinBar.setFrame(this.coins);
    }

    collectBurger() {
        this.lifePoints++;
        this.scene.healthBar.setFrame(this.lifePoints);
    }

    addCameraSettings() {
        let camera = this.scene.cameras.main;
        camera.startFollow(this, false, 1, 0);
        camera.setScroll(0, 0);
        camera.setBounds(0, 0, 4762, game.config.height);
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
            let stoneSpeed = 800;
            if (hasStones) {
                this.doSomething(ANIM_THROWDUDE, 300, false, () => {
                    let stone = new RockToThrow(this.scene, this)
                    this.scene.thrownStones.add(stone, true);
                    if (this.flipX) {
                        stoneSpeed = -800
                    }
                    stone.setVelocity(stoneSpeed, -100);
                    this.stones--;
                    this.scene.stoneBar.setFrame(this.stones);
                });
            }
        };
    }

    moveCharacter() {
        if (this.isDoing === false) {
            if (this.cursorkeys.right.isDown === true) {
                this.move(this.speed, ANIM_RUNDUDE, false);
            } else if (this.cursorkeys.left.isDown === true) {
                this.move(-this.speed, ANIM_RUNDUDE, true);
            } else if (this.isJumped === false) {
                this.move(0, ANIM_IDLEDUDE);
            }
        }
    }

    update() {
        this.moveCharacter();
    }

    /* END-USER-CODE */
}

/* END OF COMPILED CODE */

// You can write more code here
