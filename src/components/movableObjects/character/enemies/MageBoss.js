class MageBoss extends Enemy {

    constructor(scene, x, y, frame) {
        super(scene, x, y, "Mage_boss", frame);

        scene.physics.add.existing(this, false);
    }

    damage = 1;
    lifePoints = 6;

}