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
            firstObject: scene.thrownStones,
            secondObject: scene.enemies,
            function: scene.rockAndEnemyCollision(),
        },
        {
            firstObject: scene.coins,
            secondObject: scene.player,
            function: scene.coinAndPlayerCollision(),
            overlap: true,
        },
        {
            firstObject: scene.burger,
            secondObject: scene.player,
            function: scene.burgerAndPlayerCollision(),
            overlap: true,
        },
        {
            firstObject: scene.spikes,
            secondObject: scene.player,
            function: scene.playerSpikesCollision(),
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
