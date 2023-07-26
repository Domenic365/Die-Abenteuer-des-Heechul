// You can write more code here

/* START OF COMPILED CODE */

class HomeScreen extends Phaser.Scene {
    constructor() {
        super("HomeScreen");

        /* START-USER-CTR-CODE */
        // Write your code here.
        /* END-USER-CTR-CODE */
    }

    /** @returns {void} */
    editorCreate() {
        this.events.emit("scene-awake");
    }

    /* START-USER-CODE */

    // Write your code here

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

    /* END-USER-CODE */
}

/* END OF COMPILED CODE */

// You can write more code here
