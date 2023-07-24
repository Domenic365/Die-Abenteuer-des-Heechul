const loadCollisionObjects = (scene) => {
    "use strict";
    return [
        {
            firstObject: scene.player,
            secondObject: scene.enemies,
            function: scene.characterAndEnemyCollision(),
        },
        {
            firstObject: scene.player,
            secondObject: scene.stones,
            function: scene.stoneItemAndCharacterCollision(),
            overlap: true,
        },
        {
            firstObject: scene.stones,
            secondObject: scene.enemies,
            function: scene.rockAndEnemyCollision(),
        },
    ];
};

const game = new Phaser.Game({
    width: 576,
    height: 324,
    backgroundColor: "0x000000",
    pixelArt: true,
    scene: Level1,
    physics: {
        default: "arcade",
        arcade: {
            debug: true,
            gravity: { y: 700 },
        },
    },
});
