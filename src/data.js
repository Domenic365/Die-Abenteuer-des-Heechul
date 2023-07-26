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
            function: scene.itemPlayerCollision(),
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
            function: scene.itemPlayerCollision(),
            overlap: true,
        },
        {
            firstObject: scene.burger,
            secondObject: scene.player,
            function: scene.itemPlayerCollision(),
            overlap: true,
        },
        {
            firstObject: scene.spikes,
            secondObject: scene.player,
            function: scene.playerSpikesCollision(),
        },
        {
            firstObject: scene.enemies,
            secondObject: scene.enemyStop,
            function: scene.enemyStopCollision(),
        },
    ];
};

const groupsToCreate = {
    staticGroups: [
        'spikes',
        'enemyStop',
    ],
    normalGroups: [
        'stones',
        'enemies',
        'thrownStones',
        'coins',
        'burger',
    ],
};