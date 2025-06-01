import { Actor, Vector, CollisionType } from "excalibur"
import { Resources } from './resources.js'
import { Collectable } from "./collectable.js"


export class Potion extends Collectable {

    //perhaps audio upon kill
    constructor() {
        super({ width: Resources.Potion1.width, height: Resources.Potion1.height });
        this.graphics.use(Resources.Potion1.toSprite());
    }

}