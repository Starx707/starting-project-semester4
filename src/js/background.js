import { Actor, Vector } from "excalibur"
import { Resources } from './resources'

export class BackgroundLevel extends Actor {
    
    onInitialize(engine) {
        const sprite = Resources.Level.toSprite();
        sprite.width = engine.drawWidth;
        sprite.height = engine.drawHeight;
        this.graphics.use(sprite);
        this.z = -100;
        this.pos = new Vector(engine.drawWidth / 2, engine.drawHeight / 2);
    }
}