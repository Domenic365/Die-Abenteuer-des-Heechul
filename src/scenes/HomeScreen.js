class HomeScreen extends Phaser.Scene {
  constructor() {
    super("HomeScreen");
  }

  create() {
    this.createMenuDom();
  }

  createMenuDom() {
    let menu = document.createElement("div");
    menu.classList.add("menuDiv");
    menu.innerHTML = `
			<div class="top">
			    <div class="logo">
			        <p>Die Abenteuer des Heechul</p>
			    </div>
                <button class="gameButton" onclick="game.scene.scenes[0].scene.start('Boot')">
                    <img src="./assets/UI/play.png" alt="">
                </button>
            </div>
			<div class="bottom"></div>
		`;

    this.add.dom(0, 0, menu);
  }
}
