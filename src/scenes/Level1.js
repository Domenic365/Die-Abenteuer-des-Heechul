// You can write more code here

/* START OF COMPILED CODE */

class Level1 extends Phaser.Scene {
    constructor() {
        super("level1");

        /* START-USER-CTR-CODE */
        /* END-USER-CTR-CODE */
    }

    /** @returns {void} */
    preload() {
        this.load.pack("boot", "assets/boot.json");
    }

    /** @returns {void} */
    editorCreate() {
        // background
        const background = new BackgroundClass(this);
        this.add.existing(background);

        // GroundLayer
        const groundLayer = new GroundLayer(this);
        this.add.existing(groundLayer);

        // Player
        const player = new Player(this, 96, 256);
        this.add.existing(player);

        // rock2
        const rock2 = new RockItem(this, 384, 256);
        this.add.existing(rock2);

        // bear
        const bear = new Bear(this, 480, 256);
        this.add.existing(bear);

        // collider
        this.physics.add.collider(
            Player,
            rock2,
            this.stoneItemAndCharacterCollision()
        );

        this.background = background;
        this.groundLayer = groundLayer;
        this.player = player;

        this.events.emit("scene-awake");
    }

    /** @type {BackgroundClass} */
    background;
    /** @type {GroundLayer} */
    groundLayer;
    /** @type {Player} */
    player;

    /* START-USER-CODE */

    // Write your code here

    init() {
        this.loadGroups();
    }

    create() {
        this.editorCreate();
        this.createCollisions();
    }

    update() {
        this.player.moveCharacter();
    }

    loadGroups() {
        this.stones = new Phaser.Physics.Arcade.Group(this.world, this);
        this.enemies = new Phaser.Physics.Arcade.Group(this.world, this);
    }

    stoneItemAndCharacterCollision() {
        return (character, rockItem) => {
            const canCollectStone = character.stones < character.maxStone;
            if (canCollectStone) {
                character.collectStone();
                rockItem.destroy();
            }
        };
    }

    rockAndEnemyCollision() {
        return (thrownObject, enemy) => {
            thrownObject.destroy();
            enemy.gotHit(
                thrownObject.damage,
                "skeletonHitAnim",
                "skeletonDeathAnim"
            );
        };
    }

    characterAndEnemyCollision() {
        return (character, enemy) => {
            let enemyGotHitOnTop = enemy.body.touching.up;
            if (enemyGotHitOnTop) {
                enemy.gotHit(
                    character.damage,
                    "skeletonHitAnim",
                    "skeletonDeathAnim"
                );
                character.isJumped = false;
                character.jump(character.jumpSpeed, "characterJumpAnim");
            } else {
                character.gotHit(
                    enemy.damage,
                    "characterHitAnim",
                    "characterDeathAnim",
                    (character) => {
                        character.setVelocityX(character.knockback);
                        this.healthBar.setFrame(character.lifePoints);
                    }
                );
            }
        };
    }

    createCollisions() {
        const collisionList = loadCollisionObjects(this);
        collisionList.forEach((collisionObject) => {
            if (collisionObject.overlap) {
                this.physics.add.overlap(
                    collisionObject.firstObject,
                    collisionObject.secondObject,
                    collisionObject.function
                );
            } else {
                this.physics.add.collider(
                    collisionObject.firstObject,
                    collisionObject.secondObject,
                    collisionObject.function
                );
            }
        });
    }

    /* END-USER-CODE */
}

/* END OF COMPILED CODE */

// You can write more code here
