const loadCollisionObjects = (scene) => {
    "use strict";
    return [{
        firstObject: scene.character, secondObject: scene.tilesGroup, function: () => {
            scene.character.fellOnGround();
        }
    }, {
        firstObject: scene.character, secondObject: scene.enemies, function: scene.characterAndEnemyCollision(),
    }, {
        firstObject: scene.character,
        secondObject: scene.collectables,
        function: scene.stoneItemAndCharacterCollision(),
        overlap: true,
    }, {
        firstObject: scene.enemies, secondObject: scene.tilesGroup,
    }, {
        firstObject: scene.throwGroup, secondObject: scene.enemies, function: scene.rockAndEnemyCollision(),
    }, {
        firstObject: scene.collectables, secondObject: scene.tilesGroup,
    },];
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
				gravity: { y: 700},
        	}
    	}
	});