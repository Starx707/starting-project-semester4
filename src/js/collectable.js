import { Actor, Vector, CollisionType } from "excalibur"
import { Resources } from './resources.js'


export class Collectable extends Actor {

    constructor(){
        let xposition = Math.random() * 800
        let yposition = Math.random() * 800

        // let floatAnimation = new Animation({
        //     frames: [
        //         {
        //             vel: new Vector(0, -20),
        //             duration: 200
        //         },
        //         {
        //             vel: new Vector(0, -20),
        //             duration: 200
        //         }
        //     ]
        // })

        super({width:Resources.FishBone.width, height:Resources.FishBone.height});
        this.graphics.use(Resources.FishBone.toSprite());
        this.pos = new Vector(xposition, yposition);
        this.scale = new Vector(0.07, 0.07)
    }

    onInitialize(engine){
        this.body.useGravity = true;
        this.body.collisionType = CollisionType.Active;
        //or remove this and just make them float
    }
}