import { Actor, Vector } from "excalibur"
import { Resources } from './resources.js'


export class Star extends Actor {

    constructor(){
        super()
        let xpos = Math.random() * 800;
        let xvel = Math.random() * 800;
        let yvel = Math.random() * 800;
        // const star = new Actor()
        this.scale = new Vector(0.1, 0.1)
        this.graphics.use(Resources.Star.toSprite())
        this.pos = new Vector(xpos, 0);
        this.vel = new Vector(xvel, yvel);
    }

}