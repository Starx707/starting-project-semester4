import { Actor, Vector, Engine, Keys, CollisionType, DegreeOfFreedom } from "excalibur"
import { Resources } from './resources.js'

export class Platform extends Actor {
    
    constructor(x,y, w){
        super({width: w, height: 60})
        this.body.collisionType = CollisionType.Fixed;
        this.pos = new Vector(x, y) //otherwise x & y
    }

    onInitialize(engine){
        this.body.collisionType = CollisionType.Fixed;
    }
}