import { Actor, Vector, CollisionType } from "excalibur"
import { Resources } from './resources.js'
import { Collectable } from "./collectable.js"


export class Potion extends Collectable {

    //perhaps audio upon kill
    constructor() {
        super({ width: Resources.Potion1.width, height: Resources.Potion1.height });
        let xposition = Math.random() * 800
        let yposition = Math.random() * 300
        this.pos = new Vector( xposition , yposition)
        this.graphics.use(Resources.Potion1.toSprite());
        this.scale = new Vector(0.5, 0.5);
    }

}