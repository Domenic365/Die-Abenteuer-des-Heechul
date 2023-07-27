class Level1 extends Phaser.Scene {

    constructor() {
        super("level1");

    }


    editorCreate() {

        const background = new BackgroundClass(this);
        this.add.existing(background);

        const groundLayerBack = new GroundLayerBack(this);
        this.add.existing(groundLayerBack);

        const groundLayer = new GroundLayer(this);
        this.add.existing(groundLayer);

        const player = new Player(this, 128, 224);
        this.add.existing(player);

        this.healthBar = this.add.sprite(56, 16, "Healthbar_sprite", 3);

        this.stoneBar = this.add.sprite(56, 32, "Energybar_sprite", 0);

        this.coinBar = this.add.image(56, 48, "coinBar", 0);

        const spikes = new Spikes(this, 1360, 304);
        this.add.existing(spikes);

        const spikes_1 = new Spikes(this, 1392, 304);
        this.add.existing(spikes_1);

        const spikes_2 = new Spikes(this, 2768, 304);
        this.add.existing(spikes_2);

        const spikes_3 = new Spikes(this, 2800, 304);
        this.add.existing(spikes_3);

        const spikes_4 = new Spikes(this, 2832, 304);
        this.add.existing(spikes_4);

        const spikes_5 = new Spikes(this, 2864, 304);
        this.add.existing(spikes_5);

        const bear = new Bear(this, 720, 184);
        this.add.existing(bear);

        const bear_1 = new Bear(this, 1320, 264);
        this.add.existing(bear_1);

        const rockItem = new RockItem(this, 416, 272);
        this.add.existing(rockItem);

        const rockItem_1 = new RockItem(this, 1000, 280);
        this.add.existing(rockItem_1);

        const burger = new Burger(this, 1440, 272);
        this.add.existing(burger);

        const rockItem_2 = new RockItem(this, 1520, 280);
        this.add.existing(rockItem_2);

        const rockItem_3 = new RockItem(this, 1880, 280);
        this.add.existing(rockItem_3);

        const bear_2 = new Bear(this, 1104, 264);
        this.add.existing(bear_2);

        const bear_3 = new Bear(this, 2184, 264);
        this.add.existing(bear_3);

        const bear_4 = new Bear(this, 1992, 264);
        this.add.existing(bear_4);

        const bear_5 = new Bear(this, 1704, 264);
        this.add.existing(bear_5);

        const bear_6 = new Bear(this, 3128, 88);
        this.add.existing(bear_6);

        const bear_7 = new Bear(this, 3752, 264);
        this.add.existing(bear_7);

        const bear_8 = new Bear(this, 3344, 264);
        this.add.existing(bear_8);

        const coin = new Coin(this, 2696, 272);
        this.add.existing(coin);

        const coin_1 = new Coin(this, 704, 192);
        this.add.existing(coin_1);

        const coin_2 = new Coin(this, 2872, 88);
        this.add.existing(coin_2);

        const burger_1 = new Burger(this, 3016, 88);
        this.add.existing(burger_1);

        const rockItem_4 = new RockItem(this, 2928, 272);
        this.add.existing(rockItem_4);

        const burger_2 = new Burger(this, 2984, 272);
        this.add.existing(burger_2);

        const rockItem_5 = new RockItem(this, 3584, 272);
        this.add.existing(rockItem_5);

        const burger_3 = new Burger(this, 3920, 144);
        this.add.existing(burger_3);

        const enemyStop2 = new EnemyStop(this, 608, 192);
        this.add.existing(enemyStop2);

        const enemyStop1 = new EnemyStop(this, 800, 192);
        this.add.existing(enemyStop1);

        const enemyStop = new EnemyStop(this, 16, 272);
        this.add.existing(enemyStop);

        const enemyStop_1 = new EnemyStop(this, 1360, 272);
        this.add.existing(enemyStop_1);

        const enemyStop_2 = new EnemyStop(this, 1392, 272);
        this.add.existing(enemyStop_2);

        const enemyStop_3 = new EnemyStop(this, 2592, 96);
        this.add.existing(enemyStop_3);

        const enemyStop_4 = new EnemyStop(this, 3168, 96);
        this.add.existing(enemyStop_4);

        const enemyStop_5 = new EnemyStop(this, 2864, 272);
        this.add.existing(enemyStop_5);

        const enemyStop_6 = new EnemyStop(this, 2768, 272);
        this.add.existing(enemyStop_6);

        const enemyStop_7 = new EnemyStop(this, 3824, 272);
        this.add.existing(enemyStop_7);

        this.add.image(4480, 256, "Mage_boss");

        this.background = background;
        this.player = player;

        this.events.emit("scene-awake");
    }

    init() {
        this.loadGroups();
    }

    create() {
        this.editorCreate();
        this.createCollisions();
        this.healthBar.setScrollFactor(0, 0);
        this.stoneBar.setScrollFactor(0, 0);
        this.coinBar.setScrollFactor(0, 0);
        this.physics.world.setBounds(0, 0, 4672, game.config.height);
        this.createDom();
    }

    createDom() {
        let pauseDiv = document.createElement("div");
        pauseDiv.classList.add("pauseDiv");
        pauseDiv.innerHTML = /*html*/ `
		<div class="topButton">
			<Button> 
				<img src="./assets/UI/pauseButton.png" alt="">
			</Button>
		</div>
		<div class="pauseMenu"></div>
		<div class="gameOver"></div>
		`;
        this.pause = this.add.dom(0, 0, pauseDiv);
        this.pause.setScrollFactor(0, 0);
    }

    update() {
        this.player.update();
        this.background.update();
    }

    loadGroups() {
        groupsToCreate.staticGroups.forEach((name) => {
            this[name] = new Phaser.Physics.Arcade.StaticGroup(this.physics.world, this);
        });
        groupsToCreate.normalGroups.forEach((name) => {
            this[name] = new Phaser.Physics.Arcade.Group(this.physics.world, this);
        });
    }

    //collisions

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


    itemPlayerCollision() {
        return (player, item) => {
            item.collect();
        };
    }

    rockAndEnemyCollision() {
        return (thrownObject, enemy) => {
            thrownObject.destroy();
            enemy.gotHit(thrownObject.damage, ANIM_BEARHURT, ANIM_BEARDEATH);
            enemy.setVelocityX(0);
        };
    }

    characterAndEnemyCollision() {
        return (character, enemy) => {
            let enemyGotHitOnTop = enemy.body.touching.up;
            if (enemyGotHitOnTop) {
                enemy.gotHit(character.damage, ANIM_BEARHURT, ANIM_BEARDEATH);
                character.isJumped = false;
                character.jump(character.jumpSpeed, ANIM_JUMPDUDE);
            } else {
                character.gotHit(
                    enemy.damage,
                    ANIM_HURTDUDE,
                    ANIM_DEATHDUDE,
                    (character) => {
                        character.setVelocityX(character.knockback);
                        this.healthBar.setFrame(character.lifePoints);
                    }
                );
            }
        };
    }


    playerSpikesCollision() {
        return (player) => {
            player.gotHit(1, ANIM_HURTDUDE, ANIM_DEATHDUDE, (player) => {
                player.setVelocity(player.knockback * 2, player.knockback * 2);
                this.healthBar.setFrame(player.lifePoints);
            });
        };
    }

    enemyStopCollision() {
        return (enemy) => {
            enemy.speed = enemy.speed * -1;
            enemy.move(enemy.speed, ANIM_BEARWALK, !enemy.flipX);
        };
    }
}