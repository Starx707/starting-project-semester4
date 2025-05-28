//to exit simulation use: ^C
import '../css/style.css'
import { Actor, Engine, Vector, DisplayMode, SolverStrategy, CollisionType } from "excalibur"
import { Resources, ResourceLoader } from './resources.js'
import { Fish } from './fish.js'
import { Star } from './star.js'
import { PlayerCat } from './player.js'
import { Collectable } from './collectable.js'
import { UI } from './ui.js'
import { Deposit } from './deposit.js'
import { Platform } from './platform.js'

//this.scene.engine
//this.addChild()

/*Still need:
- timer 
- amount of collectables*/

//Active: can move but can't move through other collisions
//Fixed: can't move but has collision (like platforms)
//Pasive: doesn't do physics but does have collision events (such as for dialog)
// this.body.collisionType = CollisionType.[name]

export class Game extends Engine {

    player
    ui

    //platforms/world
    platform1
    platform2

    constructor() {
        super({ 
            width: 800,
            height: 600,
            maxFps: 60,
            displayMode: DisplayMode.FitScreen,
            physics: {
                solver: SolverStrategy.Realistic, //or Arcade
                gravity: new Vector(0, 800),
            }
         })
        this.start(ResourceLoader).then(() => this.startGame())
        this.showDebug(true);

    }

    startGame() {
 
        this.player = new PlayerCat(300, 300);
        this.add(this.player);

        for (let i=0; i < 10; i++){
            let collectable = new Collectable();
            this.add(collectable);
        }

        let trashcan = new Deposit(250, 550);
        this.add(trashcan)

        this.ui = new UI();
        this.add(this.ui)

        this.platform1 = new Platform(400, 600, 500);
        this.add(this.platform1);

        this.platform2 = new Platform(400, 500, 200);
        this.add(this.platform2);
    }
}


new Game()
