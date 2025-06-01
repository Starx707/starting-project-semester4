import { Actor, Vector, CollisionType, DegreeOfFreedom } from "excalibur"
import { Resources } from './resources.js'


export class Collectable extends Actor {

    #bounciness;

    constructor(hitbox) {
        super(hitbox)
        
        let xposition = Math.random() * 800
        let yposition = Math.random() * 800
        this.graphics.use(Resources.FishBone.toSprite());
        this.pos = new Vector(xposition, yposition);
        this.body.limitDegreeOfFreedom.push(DegreeOfFreedom.Rotation);
    }

    onInitialize(engine) {
        this.body.useGravity = true;
        this.body.collisionType = CollisionType.Active;
    }
}