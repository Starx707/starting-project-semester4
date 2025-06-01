import { Actor, Vector, CollisionType, DegreeOfFreedom}from "excalibur";
import { Platform } from "./platform";


export class Ball extends Actor {
    constructor(x, y){
        super()
        // this.graphics.use(Resources.[].toSprite());
        this.pos = new Vector(x, y)
    }

    onInitialize(){
        this.on('collisionstart', (event) => this.#collision(event));
    }

    #collision(e){
        if(e.other.owner instanceof PlayerCat) {
            //if player fly away
        } else if (e.other.owner instanceof Platform){
            //if colliding with floor increase friction and decrease bounce
        } else {
            //if not player then softly bounce away
        }
    }

}