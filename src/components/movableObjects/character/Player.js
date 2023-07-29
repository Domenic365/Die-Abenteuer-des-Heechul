class Player extends MovableObjects {
  constructor(scene, x, y, texture, frame) {
    super(scene, x, y, "Dude_Monster", frame);
    scene.physics.add.existing(this, false);
    this.body.collideWorldBounds = true;
    this.body.setOffset(8, 0);
    this.body.setSize(16, 32, false);
    this.createKeys();
    this.addCameraSettings();
  }

  maxItem = 3;
  stones = 0;
  lifePoints = 3;
  damage = 2;
  speed = 100;
  jumpSpeed = -400;
  knockback = -250;
  coins = 0;
  isDoing = false;
  reachedBoss = false;
  bossFightStarted = false;
  isInvincible = false;

  checkCollection(itemCount) {
    return itemCount < this.maxItem;
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
          let stone = new RockToThrow(this.scene, this);
          this.scene.thrownStones.add(stone, true);
          if (this.flipX) {
            stoneSpeed = -800;
          }
          stone.setVelocity(stoneSpeed, -100);
          this.stones--;
          this.scene.stoneBar.setFrame(this.stones);
        });
      }
    };
  }

  gotHit(damage, knockToRight) {
    let knockbackX = this.knockback;
    if (knockToRight) {
      knockbackX = knockbackX * -1;
    }
    debugger;
    super.gotHit(damage, ANIM_HURTDUDE, ANIM_DEATHDUDE, (character) => {
      this.setVelocity(knockbackX, this.knockback);
      this.scene.healthBar.setFrame(character.lifePoints);
    });
    this.setInvincible();
  }

  setInvincible() {
    this.isInvincible = true;
    setTimeout(() => {
      this.isInvincible = false;
    }, 3000);
  }

  moveCharacter() {
    if (this.isDoing === false) {
      if (this.cursorkeys.right.isDown === true) {
        this.move(this.speed, ANIM_RUNDUDE, false);
      } else if (this.cursorkeys.left.isDown === true) {
        this.move(-this.speed, ANIM_RUNDUDE, true);
      } else if (this.isJumped) {
        this.move(0, ANIM_JUMPDUDE);
      } else {
        this.move(0, ANIM_IDLEDUDE);
      }
    }
  }

  playerControl() {
    this.dead = this.lifePoints < 1;
    if (!this.dead) {
      this.moveCharacter();
    }
    if (this.dead && this.isDoing === false) {
      game.scene.scenes[2].gameOver();
    }
  }

  checkBoss() {
    if (this.bossFightStarted === false) {
      this.reachedBoss = this.x > 3960 && this.x < 4000;
    }
    if (this.x > 4000) {
      this.bossFightStarted = true;
    }
  }

  update() {
    this.checkBoss();
    if (this.reachedBoss) {
      this.scene.startBossFight();
    } else {
      this.playerControl();
    }
  }
}
