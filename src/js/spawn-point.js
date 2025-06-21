import { Actor, Vector, Engine, Keys, CollisionType, DegreeOfFreedom} from "excalibur"
import { Resources } from './resources.js'
import { PlayerCat } from "./player.js";


export class Point extends Actor {

    gameWon

    constructor(x, y, chosWidth){ 
        super({width: chosWidth, height:60})
        this.pos = new Vector(x, y);
    }
    
    onInitialize(){
        this.on('collisionstart', (event) => this.#collision(event));
    }
    
    #collision(e){
        this.gameWon = this.scene.engine.goalReached;
        if(e.other.owner instanceof PlayerCat) {
            if(this.gameWon === true){
                this.scene.engine.gameWon();
            }
        }
    }
}