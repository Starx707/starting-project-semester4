import { Actor, Vector, CollisionType } from "excalibur"
import { Resources } from './resources.js'
import { Collectable } from "./collectable.js"


export class Coin extends Collectable {
    constructor() {
        super({ width: Resources.Coin.width, height: Resources.Coin.height });
        this.graphics.use(Resources.Coin.toSprite());
    }

}