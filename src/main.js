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
				gravity: { y: 300},
        	}
    	}
	});