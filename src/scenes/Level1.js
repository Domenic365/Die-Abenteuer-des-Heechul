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
    this.createBossFightText();
    this.createAudio();
    this.backgroundmusic.play();
  }

  update() {
    this.player.update();
    this.background.update();
    this.mageBoss.update();
  }

  initDom() {
    this.pauseDiv.classList.add("pauseDiv");
    this.pause = this.add.dom(0, 0, this.pauseDiv);
    this.pause.setScrollFactor(0, 0);
  }

  gameOver() {
    this.scene.sleep();
    this.bossFight = false;
    const pauseButton = document.querySelector(".topButton Button");
    pauseButton.classList.add("dpNone");
    const gameOver = document.querySelector("[gameovermenu]");
    gameOver.classList.remove("dpNone");
    this.sound.stopAll();
    if (this.mageBoss.isDead) {
      let pauseText = (document.querySelector("[pausetext]").innerHTML =
        "YOU WIN");
      this.youWin.play();
    } else {
      this.gameOverAudio.play();
    }
  }

  startBossFight() {
    this.bossFight = true;
    this.sound.stopAll();
    this.bossMusic.play();
    let camera = this.cameras.main;
    camera.stopFollow();
    camera.pan(4250, 0, 800, Phaser.Math.Easing.Linear.InOut, true);
    setTimeout(() => {
      this.bossText.destroy();
      this.mageBoss.status = "attacking";
      this.mageBoss.visible = true;
    }, 2000);
  }

  toggleBossTextVisibility() {
    if (this.bossFight) {
      this.bossText.visible = !this.bossText.visible;
    }
  }

  backToHomeScreen() {
    this.sound.stopAll();
    game.scene.scenes[0].scene.start("HomeScreen");
  }

  //objectCreation
  createEnvironment() {
    this.background = new BackgroundClass(this);
    this.groundLayerBack = new GroundLayerBack(this);
    this.groundLayer = new GroundLayer(this);
  }

  createPlayerAndBoss() {
    this.player = new Player(this, 60, 224);
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
    bars.forEach((barInfo) => {
      this[barInfo.name] = new Bar(
        this,
        56,
        barInfo.y,
        barInfo.sprite,
        barInfo.value,
      );
    });
  }

  createDom() {
    this.pauseDiv = document.createElement("div");
    this.pauseDiv.innerHTML = /*html*/ `
		<div class="topButton">
			<Button class="gameButton" onclick="toggleGame()"> 
				<img src="./assets/UI/pauseButton.png" alt="">
			</Button>
		</div>
		<section pauseMenu class="pauseMenu dpNone">
		    <div class="logo">
			        <p>Pause</p>
			</div>
                <button class="gameButton" onclick="toggleGame()">
                    <img src="./assets/UI/play.png" alt="">
                </button>
        </section>
        <section gameOverMenu class="pauseMenu dpNone">    
        		    <div class="logo">
			        <p pauseText>GAME OVER</p>
			</div>
                <button class="gameButton" onclick="game.scene.scenes[2].backToHomeScreen()">
                    <img src="./assets/UI/home.png" alt="">
                </button>
        </section>
        <section class="buttons">
            <button onmousedown="game.scene.scenes[2].player.left = true" onmouseup="game.scene.scenes[2].player.left = false" class="arrowLeft"></button>
            <button onmousedown="game.scene.scenes[2].player.right = true" onmouseup="game.scene.scenes[2].player.right = false" class="arrowRight"></button>
            <button onclick="game.scene.scenes[2].player.jump(game.scene.scenes[2].player.jumpSpeed, ANIM_JUMPDUDE)" class="arrowUp"></button>
            <button onclick="() =>{game.scene.scenes[2].player.throwStone()}" class="stoneButton"></button>
        </section>
		`;
    this.initDom();
  }

  loadGroups() {
    groupsToCreate.staticGroups.forEach((name) => {
      this[name] = new Phaser.Physics.Arcade.StaticGroup(
        this.physics.world,
        this,
      );
    });
    groupsToCreate.normalGroups.forEach((name) => {
      this[name] = new Phaser.Physics.Arcade.Group(this.physics.world, this);
    });
  }

  createBossFightText() {
    this.bossText = this.add.text(
      4250,
      this.cameras.main.centerY,
      "Bossfight Start!",
      {
        fontFamily: "Planes_ValMore",
        fontSize: "48px",
        color: "#ffffff",
      },
    );
    this.bossText.setOrigin(0.5);
    this.time.addEvent({
      delay: 100,
      callback: this.toggleBossTextVisibility,
      callbackScope: this,
      loop: true,
    });
    this.bossText.visible = false;
  }

  createAudio() {
    audio.forEach((audioData) => {
      this[audioData.key] = this.sound.add(audioData.key, audioData.config);
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
          collisionObject.function,
        );
      } else {
        this.physics.add.collider(
          collisionObject.firstObject,
          collisionObject.secondObject,
          collisionObject.function,
        );
      }
    });
  }

  itemPlayerCollision() {
    return (player, item) => {
      item.collect(player);
    };
  }

  rockAndEnemyCollision() {
    return (thrownObject, enemy) => {
      thrownObject.destroy();
      enemy.gotHit(thrownObject.damage);
      this.hit.play();
    };
  }

  characterAndEnemyCollision() {
    return (character, enemy) => {
      let enemyGotHitOnTop = enemy.body.touching.up;
      if (enemyGotHitOnTop) {
        enemy.gotHit(character.damage);
        character.isJumped = false;
        character.jump(character.jumpSpeed, ANIM_JUMPDUDE);
      } else {
        enemy.setVelocity(0);
        character.gotHit(enemy.damage, enemy.body.touching.right);
      }
      this.hit.play();
    };
  }

  playerSpikesCollision() {
    return (player) => {
      player.gotHit(1);
    };
  }

  enemyStopCollision() {
    return (enemy) => {
      enemy.stop();
    };
  }
}
