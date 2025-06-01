import { Actor, Vector, Engine, Keys, CollisionType, DegreeOfFreedom} from "excalibur"
import { Resources } from './resources.js'
import { Enemy } from "./enemy.js";
import { PlayerCat } from "./player.js"

export class Raccoon extends Enemy {

    constructor(x, y){ 
        super({width: Resources.RaccoonEnemy.width, height: Resources.RaccoonEnemy.height})
        this.graphics.use(Resources.RaccoonEnemy.toSprite());
        this.pos = new Vector(x, y);
    }

    onInitialize(engine){
        this.on('collisionstart', (event) => this.#collision(event));

        this.body.useGravity = true;
        this.body.collisionType = CollisionType.Active;
        this.body.limitDegreeOfFreedom.push(DegreeOfFreedom.Rotation);
    }

    #collision(event){
        if(event.other.owner instanceof PlayerCat){
            this.scene.engine.player.loseLife(1);
        }
    }

}