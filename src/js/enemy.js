import { Actor, Vector, Engine, Keys , CollisionType, DegreeOfFreedom} from "excalibur"
import { Resources } from './resources.js'
import { UI } from './ui.js';
import { PlayerCat } from "./player.js";

export class Enemy extends Actor {

    constructor(hitbox){ 
        super(hitbox)
    }

    onInitialize(engine){
        this.body.useGravity = true;
        this.body.collisionType = CollisionType.Active;
        this.body.limitDegreeOfFreedom.push(DegreeOfFreedom.Rotation);
    }

}