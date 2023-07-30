const game = new Phaser.Game({
  width: 576,
  height: 324,
  backgroundColor: "0x000000",
  pixelArt: true,
  scene: [HomeScreen, Boot, Level1],
  scale: {
    mode: Phaser.Scale.AUTO,
    parent: "canvas",
  },
  dom: {
    createContainer: true,
  },
  physics: {
    default: "arcade",
    arcade: {
      debug: false,
      gravity: { y: 700 },
    },
  },
});

function toggleGame() {
  "use strict";
  const pauseMenu = document.querySelector("[pauseMenu]");
  const isNotDisplayed = pauseMenu.classList.contains("dpNone");
  if (isNotDisplayed) {
    pauseMenu.classList.remove("dpNone");
    game.scene.scenes[2].scene.pause();
  } else {
    pauseMenu.classList.add("dpNone");
    game.scene.scenes[2].scene.resume("level1");
  }
}

let firstLoaded = true;

function loadMuteButton() {
  "use strict";
  let imgElement = document.querySelector("[mute-button]");
  if (game.sound.mute || firstLoaded) {
    imgElement.src = "./assets/UI/unmute.png";
    game.sound.mute = false;
  } else {
    imgElement.src = "./assets/UI/mute.png";
    game.sound.mute = true;
  }

  firstLoaded = false;
}
