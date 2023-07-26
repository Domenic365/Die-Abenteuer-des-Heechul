class Bear extends Enemy {

	constructor(scene, x, y, texture, frame) {
		super(scene, x ?? 0, y ?? 0, texture || "Bear", frame);

		scene.physics.add.existing(this, false);
		this.body.setOffset(10, 10);
		this.body.setSize(20, 30, false);
	}

	damage = 1;
	lifePoints = 2;

	fellOnGround() {
		let isAlive = this.lifePoints > 0;
		if (isAlive && this.isDoing === false) {
			this.move(this.speed, ANIM_BEARWALK);
		}
	}
}
