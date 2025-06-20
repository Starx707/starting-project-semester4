import { Vector, Actor } from 'excalibur';
import { Resources } from './resources.js'

export class Glasses extends Actor {
    constructor(){ 
        super();
        this.pos = new Vector(3,-1)
        this.graphics.use(Resources.PinkGlasses.toSprite());
        this.scale = new Vector(0.4,0.4)
    }

    flipSprite(flipped){
        if(flipped === false){
        this.graphics.flipHorizontal = true;
        } else {
        this.graphics.flipHorizontal = false;
        }
    }

}