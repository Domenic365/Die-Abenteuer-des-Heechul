class RockItem extends Collactable {

    constructor(scene, x, y, texture, frame) {
        super(scene, x, y, "Rock2", frame, scene.stones, scene.stoneBar, "rock");
    }
}
