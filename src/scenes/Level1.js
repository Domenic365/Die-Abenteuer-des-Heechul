class Level1 extends Phaser.Scene {

    constructor() {
        super("level1");
    }

    init() {
        this.loadGroups();
        this.physics.world.setBounds(0, 0, 4672, game.config.height);
    }

    create() {
        this.createEnvironment();
        this.createBars();
        this.createPlayerAndBoss();
        this.createObjects();
        this.createCollisions();
        this.createDom();
    }

    update() {
        this.player.update();
        this.background.update();
        this.mageBoss.update();
    }

    //objectCreation


    createEnvironment() {
        this.background = new BackgroundClass(this);
        this.groundLayerBack = new GroundLayerBack(this);
        this.groundLayer = new GroundLayer(this);
    }

    createPlayerAndBoss() {
        this.player = new Player(this, 4400, 224);
        this.mageBoss = new MageBoss(this, 4480, 256);
    }

    createObjects() {
        for (const [ObjectClass, coordinatesArray] of objectsToCreate) {
            this.createAndAddObjects(this, ObjectClass, coordinatesArray);
        }
    }

    createAndAddObjects(scene, objectClass, coordinatesArray) {
        for (const coords of coordinatesArray) {
            const obj = new objectClass(scene, coords[0], coords[1]);
            scene.add.existing(obj);
        }
    }


    createBars() {
        bars.forEach(barInfo => {
            this[barInfo.name] = new Bar(this, 56, barInfo.y, barInfo.sprite, barInfo.value);
        });
    }


    createDom() {
        let pauseDiv = document.createElement("div");
        pauseDiv.classList.add("pauseDiv");
        pauseDiv.innerHTML = /*html*/ `
		<div class="topButton">
			<Button class="gameButton" onclick="toggleGame()"> 
				<img src="./assets/UI/pauseButton.png" alt="">
			</Button>
		</div>
		<section pauseMenu class="pauseMenu dpNone">
		    <div class="logo">
			        <p pauseText>Pause</p>
			</div>
                <button class="gameButton" onclick="toggleGame()">
                    <img src="./assets/UI/play.png" alt="">
                </button>
        </section>
        <section gameOverMenu class="pauseMenu dpNone">    
        		    <div class="logo">
			        <p pauseText>GAME OVER</p>
			</div>
                <button class="gameButton" onclick="game.scene.scenes[0].scene.start('HomeScreen')">
                    <img src="./assets/UI/home.png" alt="">
                </button>
        </section>
		`;
        this.pause = this.add.dom(0, 0, pauseDiv);
        this.pause.setScrollFactor(0, 0);
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
                this.physics.add.overlap(collisionObject.firstObject, collisionObject.secondObject, collisionObject.function);
            } else {
                this.physics.add.collider(collisionObject.firstObject, collisionObject.secondObject, collisionObject.function);
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
                character.gotHit(enemy.damage, ANIM_HURTDUDE, ANIM_DEATHDUDE, (character) => {
                    character.setVelocityX(character.knockback);
                    this.healthBar.setFrame(character.lifePoints);
                });
            }
        };
    }

    gameOver() {
        this.scene.sleep();
        const pauseButton = document.querySelector(".topButton Button");
        pauseButton.classList.add("dpNone");
        const gameOver = document.querySelector("[gameovermenu]");
        gameOver.classList.remove("dpNone");
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