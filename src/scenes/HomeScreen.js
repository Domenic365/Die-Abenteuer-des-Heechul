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
        menu.innerHTML = /*html*/ `
			<div><img src="" alt=""><button></button></div>
			<div></div>
		`;
    }

    /* END-USER-CODE */
}

/* END OF COMPILED CODE */

// You can write more code here
