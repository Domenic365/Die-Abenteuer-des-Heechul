class HomeScreen extends Phaser.Scene {
  constructor() {
    super("HomeScreen");
  }

  loaded = false;

  create() {
    this.createMenuDom();
  }

  createMenuDom() {
    let menu = document.createElement("div");
    menu.classList.add("menuDiv");
    menu.innerHTML = `
        <section pauseMenu class="pauseMenu">
		    <div class="logo">
			        <p>Die Abenteuer des Heechul</p>
			</div>
			<div class="menuButtons">
			    <button class="gameButton" onclick="game.scene.scenes[0].scene.start('Boot')">
                    <img src="./assets/UI/play.png" alt="" draggable="false">
                </button>
            </div>
        </section>
		`;

    this.add.dom(0, 0, menu);
  }
}
