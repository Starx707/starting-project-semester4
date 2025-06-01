import { Actor, Vector, Engine, Keys, CollisionType } from "excalibur"
import { Resources } from './resources.js'
import { Collectable } from "./collectable.js";
import { UI } from './ui.js';

export class Deposit extends Actor {

    constructor(x,y){
        super({width: Resources.TrashCan.width, height: Resources.TrashCan.height}) 
        this.graphics.use(Resources.TrashCan.toSprite());
        this.pos = new Vector(x, y)
        this.scale = new Vector(0.05, 0.05)
    }

    onInitialize(engine){
        this.body.collisionType = CollisionType.Passive;
    }
}