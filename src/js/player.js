import { Actor, Vector, Engine, Keys, CollisionType, DegreeOfFreedom} from "excalibur"
import { Resources } from './resources.js'
import { Collectable } from "./collectable.js";
import { Deposit } from "./deposit.js";

export class PlayerCat extends Actor {

    lives
    sass
    #canDeposit
    //sprinting (sound)
    //hitting (sound)
    //jumping X (sound)
    //mewing X (sound)
    //holding (more trash = slower?)
    //*dispose of trash (sound)
    //getting hit (sound)

//to add bullets of sorts use this.scene.add(new ... this.posx, this.posy >> for it to spawn nearyby) aka spawning (for trash from npc's)

/*things that can be edited about physics:
- mass
- fritction
- bounce
- force
- collission
- gravity */

//runs upon creation of instance
    constructor(x, y){ 
        super({width:15, height:15})
        this.graphics.use(Resources.PlayerCat.toSprite());
        this.pos = new Vector(x, y)
        this.scale = new Vector(3, 3)
        this.lives = 3;
        this.sass = 0;
        this.#canDeposit = false;
        this.events.on("exitviewport", (e) => this.resetPosition(e))
    }

    onInitialize(engine){
        this.on('collisionstart', (event) => this.#collision(event));
        this.on('collisionend', (event) => this.#collisionend(event));

        //physics & gravity
        this.body.useGravity = true;
        this.body.collisionType = CollisionType.Active;
        //character can't fall over
        this.body.limitDegreeOfFreedom.push(DegreeOfFreedom.Rotation);
    }


    onPreUpdate(engine, delta){
        let xspeed = 0;
        let yspeed = 0;

    if(engine.input.keyboard.isHeld(Keys.Left) || engine.input.keyboard.isHeld(Keys.A)){
        this.body.applyLinearImpulse(new Vector(15 * delta, 0))
        this.vel = new Vector(-170, this.vel.y)
    }
    if(engine.input.keyboard.isHeld(Keys.Right) || engine.input.keyboard.isHeld(Keys.D)){
        this.body.applyLinearImpulse(new Vector(-15 * delta, 0))
        this.vel = new Vector(170, this.vel.y)
    }
    
    if(engine.input.keyboard.isHeld(Keys.E)){ //mewing
        //play audio clip from resources
    }

    if(engine.input.keyboard.wasPressed(Keys.Space) || engine.input.keyboard.wasPressed(Keys.ArrowUp) || engine.input.keyboard.wasPressed(Keys.W)){
        if(this.#canDeposit === true){
            console.log("deposit trash");
            console.log(this.#canDeposit);
        }
        else{
            console.log("jump");
            this.body.applyLinearImpulse(new Vector(0, -250 * delta)); //jump
        }
    }
    

    }

    #collision(event){
        if(event.other.owner instanceof Collectable) {
            event.other.owner.kill();
            this.scene.engine.ui.updateScore();
        }
        
        if(event.other.owner instanceof Deposit){
            this.#canDeposit = true;
        }
    }

    #collisionend(event){
        console.log(event);
        if(event.other.owner instanceof Deposit){
            console.log("can't deposite anymore")
            this.#canDeposit = false;
        }
    }

    #playerDefeated(event){
        
    }

    resetPosition(event){
        event.target.pos = new Vector(400, 300)
    }

}