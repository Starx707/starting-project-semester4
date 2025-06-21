import { Actor, Vector, Engine, Keys, CollisionType, DegreeOfFreedom} from "excalibur"
import { Resources } from './resources.js'
import { Collectable } from "./collectable.js";
import { Deposit } from "./deposit.js";
import { Trash } from "./trash.js";
import { Potion } from "./potion.js";
import { Platform } from "./platform.js";
import { Raccoon } from "./raccoon.js";
import { Coin } from "./coin.js";
import { Glasses } from "./glasses.js";
import { Trap } from "./trap.js";

export class PlayerCat extends Actor {

    lives

    sass
    #sassGlasses
    isSass

    #canDeposit

    #groundCheck

    gameState


/*things that can be edited about physics:
- mass
- fritction
- bounce
- force
- collission
- gravity */

    constructor(x, y){ 
        super({width:15, height:15})
        this.graphics.use(Resources.PlayerCat.toSprite());
        this.pos = new Vector(x, y)
        this.scale = new Vector(2,2)
        this.lives = 3;
        this.sass = 0;
        this.#canDeposit = false;
        this.#sassGlasses = new Glasses();
        this.events.on("exitviewport", (e) => this.#playerDefeated(e))
    }

    onInitialize(engine){
        this.on('collisionstart', (event) => this.#collision(event));
        this.on('collisionend', (event) => this.#collisionend(event));

        this.body.useGravity = true;
        this.body.collisionType = CollisionType.Active;
        this.body.limitDegreeOfFreedom.push(DegreeOfFreedom.Rotation);

        this.gameState = this.scene.engine.gameOver;
        this.isSass = false;

        this.sass = 0;
    }


    onPreUpdate(engine, delta){
        let xspeed = 0;
        let yspeed = 0;

        if(this.gameOver){
            // console.log("Game state: GO - remove controlls");
            this.scene.engine.ui.gameOver();

        } else{
            if(engine.input.keyboard.isHeld(Keys.Left) || engine.input.keyboard.isHeld(Keys.A)){
                this.body.applyLinearImpulse(new Vector(15 * delta, 0))
                this.graphics.flipHorizontal = true;
                this.#sassGlasses.graphics.flipHorizontal = true;
                this.#sassGlasses.pos = new Vector(-2,-1);
                this.vel = new Vector(-170, this.vel.y)
            }
            if(engine.input.keyboard.isHeld(Keys.Right) || engine.input.keyboard.isHeld(Keys.D)){
                this.body.applyLinearImpulse(new Vector(-15 * delta, 0))
                this.graphics.flipHorizontal = false;
                this.#sassGlasses.graphics.flipHorizontal = false;
                this.#sassGlasses.pos = new Vector(3,-1);
                this.vel = new Vector(170, this.vel.y)
            }
            
            if(engine.input.keyboard.isHeld(Keys.E)){ //mewing
                //play audio clip from resources
            }
        
            if(engine.input.keyboard.wasPressed(Keys.Space) || engine.input.keyboard.wasPressed(Keys.ArrowUp) || engine.input.keyboard.wasPressed(Keys.W)){
                if(this.#canDeposit === true){
                    // console.log("deposit trash");
                }
                else{
                    if(this.#groundCheck === true){
                        this.body.applyLinearImpulse(new Vector(0, -250 * delta)); 
                    }
                }
            }
        }
   
    

    }

    #collision(event){
        if(event.other.owner instanceof Collectable) {
            event.other.owner.kill();
        }

        if(event.other.owner instanceof Potion){
            this.scene.engine.ui.updatePickups("potion", 10);
            this.scene.engine.increasePotionScore();
            this.scene.engine.ui.updatePotionsCollected();
        } 
        if(event.other.owner instanceof Trash) {
            this.scene.engine.ui.updatePickups("trash", 1);

        }
        if(event.other.owner instanceof Coin){
            this.scene.engine.ui.updatePickups("coin", 2);
            if(this.sass < 1){
                this.sass++
            } else {
                this.#sassMode();
            }
        }
        
        if(event.other.owner instanceof Deposit){
            this.#canDeposit = true;
        }

        if(event.other.owner instanceof Platform || event.other.owner instanceof Raccoon){
            this.#groundCheck = true;
        }

        if(event.other.owner instanceof Trap){
            this.actions.moveBy(new Vector(-100, -100), 1000)
            this.actions.blink(200, 100, 5);
        }
    }

    #collisionend(event){
        if(event.other.owner instanceof Deposit){
            this.#canDeposit = false;
        }

        if(event.other.owner instanceof Platform){
            this.#groundCheck = false;
        }
    }

    #playerDefeated(event){
        this.resetPosition(event.target);
        this.loseLife(3);
    }

    resetPosition(target){
        target.pos = new Vector(400, 300);
    }

    loseLife(damage){
        if(this.lives - damage < 1){
            //game over sound
            this.scene.engine.ui.gameOver();
            this.lives = 0;
        }
        else{
            this.lives = this.lives - damage;
            this.actions.blink(100, 100, 3);
        }
        this.scene.engine.ui.updateLives();
    }

    #sassMode(){
        if(this.isSass === false){
            this.isSass = true;
            this.addChild(this.#sassGlasses);

            let random = Math.floor(Math.random() * 3)
         if(random === 1){
                 //glasses
            } else if (random === 2){
             //high hat
            } else {
            //egg?
            }
        }
        
    }

}