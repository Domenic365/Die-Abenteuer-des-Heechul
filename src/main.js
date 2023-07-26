const game = new Phaser.Game({
    width: 576,
    height: 324,
    backgroundColor: "0x000000",
    pixelArt: true,
    scene: [HomeScreen, Boot, Level1],
    scale: {
        mode: Phaser.Scale.FIT,
        parent: "canvas",
    },
    dom: {
        createContainer: true,
    },
    physics: {
        default: "arcade",
        arcade: {
            debug: false,
            gravity: {y: 700},
        },
    },
});
