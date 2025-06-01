import { Actor, Vector, Engine, Keys, CollisionType, DegreeOfFreedom} from "excalibur"
import { Resources } from './resources.js'


export class Carpet extends Actor {

    constructor(x, y){ 
        super({width:150, height:5})
        this.graphics.use(); //Resources.name.toSprite()
        this.pos = new Vector(x, y);
    }

}