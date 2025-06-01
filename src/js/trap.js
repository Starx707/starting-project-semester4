import {CollisionType, DegreeOfFreedom, Vector} from "excalibur";
import { Enemy } from "./enemy.js";
import { Resources } from './resources.js';
import { PlayerCat } from "./player.js";

export class Trap extends Enemy {
    constructor(x, y){
        super({width: Resources.Spikes.toSprite().width, height: Resources.Spikes.toSprite().height})
        this.graphics.use(Resources.Spikes.toSprite());
        this.pos = new Vector(x, y)
        this.scale = new Vector(0.1, 0.1)
    }

    onInitialize(){
        this.on('collisionstart', (event) => this.#collision(event));
        this.body.useGravity = true;
        this.body.collisionType = CollisionType.Fixed;
    }

    #collision(e){
        if(e.other.owner instanceof PlayerCat) {
            this.scene.engine.player.loseLife(2);
        } else {
            e.other.owner.kill();
        }
    }

}