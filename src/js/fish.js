import { Actor, Vector } from "excalibur"
import { Resources } from './resources.js'


export class Fish extends Actor {
    
    onInitialize(engine){
        //also have collisionend
        //this.on('collisionstart', (event) => this.fishLeft); //event listener upon contact of another thing
        //add a check depending on what should triggered it
    }

    constructor(){
        super() //this is a hitbox???
        console.log("I is fish");
        this.graphics.use(Resources.FishSprite.toSprite());
        this.pos = new Vector(500, 300)
        this.vel = new Vector(-100,0)
        this.events.on("exitviewport", (e) => this.fishLeft(e))
    }

    fishLeft(e) {
        //if(event.other.owner instanceOf [classname])
        e.target.pos = new Vector(1350, 300)
    }

}