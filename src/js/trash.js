import { Actor, Vector, CollisionType } from "excalibur"
import { Resources } from './resources.js'
import { Collectable } from "./collectable.js"


export class Trash extends Collectable {
    constructor() {
        super({ width: Resources.FishBone.width, height: Resources.FishBone.height });
        this.graphics.use(Resources.FishBone.toSprite());
        //sorry but I must
        this.scale = new Vector (0.3, 0.3);
    }
}