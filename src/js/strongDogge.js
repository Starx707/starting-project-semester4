import { Actor, CollisionType, DegreeOfFreedom, Resource, Vector} from "excalibur"

export class Dogge extends Actor {
    
    constructor(x,y){
        super({width: Resource.Dogge.width, height: Resource.Dogge.height})
        this.graphics.use(Resources.Dogge.toSprite());
        this.pos = new Vector(x, y);
    }

    onInitialize(){
        this.body.useGravity = true;
        this.body.collisionType = CollisionType.Fixed;
        this.body.limitDegreeOfFreedom.push(DegreeOfFreedom.Rotation);
    }

}