import { Actor, Vector, CollisionType, DegreeOfFreedom}from "excalibur";
import { Platform } from "./platform";


export class Ball extends Actor {
    constructor(x, y){
        super()
        this.graphics.use(Resources.Ball.toSprite());
        this.pos = new Vector(x, y)
    }

    onInitialize(){
        this.on('collisionstart', (event) => this.#collision(event));
        this.body.useGravity = true;
        this.body.collisionType = CollisionType.Active;
    }

    #collision(e){
        if(e.other.owner instanceof PlayerCat) {
            this.actions.moveTo(new Vector(this.pos.y + 100, this.pos.x + 10), 100)
        } else if (e.other.owner instanceof Platform){
            //if colliding with floor increase friction and decrease bounce
        } else {
            //if not player then softly bounce away
        }
    }

}