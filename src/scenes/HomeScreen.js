class HomeScreen extends Phaser.Scene {
    constructor() {
        super("HomeScreen");
    }

    editorCreate() {
        this.events.emit("scene-awake");
    }

    create() {
        this.editorCreate();
        this.createMenuDom();
    }

    createMenuDom() {
        let menu = document.createElement("div");
        menu.classList.add("menuDiv");
        menu.innerHTML = /*html*/ `
			<div class="top">
                <img src="./assets/UI/Logo.png" alt="">
                <button onclick="game.scene.scenes[0].scene.start('Boot')">
                    <img src="./assets/UI/play.png" alt="">
                </button>
            </div>
			<div class="bottom"></div>
		`;

        this.add.dom(0, 0, menu);
    }
}
