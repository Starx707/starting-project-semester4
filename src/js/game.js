//to exit simulation use: ^C
import '../css/style.css'
import { Actor, Engine, Vector, DisplayMode, SolverStrategy, CollisionType } from "excalibur"
import { Resources, ResourceLoader } from './resources.js'
import { PlayerCat } from './player.js'
import { UI } from './ui.js'
import { Deposit } from './deposit.js'
import { Platform } from './platform.js'
import { Potion } from './potion.js'
import { Trash } from './trash.js'
import { Raccoon } from './raccoon.js'
import { Coin } from './coin.js'
import { Trap } from './trap.js'
import { Ball } from './ball.js'
import { BackgroundLevel } from './background.js'

export class Game extends Engine {

    player
    ui

    //scores
    score
    sassScore
    potionsCollected
    goalPoints

    //platforms/world
    platform1
    platform2
    trashcan
    ball
    background

    //enemies
    setEnemy
    enemy1
    trap1

    //states
    gameOver

    constructor() {
        super({ 
            width: 800,
            height: 600,
            maxFps: 60,
            displayMode: DisplayMode.FitScreen,
            pixelArt: true,
            pixelRatio: 2,
            physics: {
                solver: SolverStrategy.Realistic, //or Arcade
                gravity: new Vector(0, 800),
            }
         })
        
        this.start(ResourceLoader).then(() => this.startGame())
        this.showDebug(true);

        //standard variables
        this.score = 0;
        this.goalPoints = 4;
        this.potionsCollected = 0;

        this.gameOver = false;
    }

    startGame() {
 
        this.player = new PlayerCat(300, 300);
        this.add(this.player);

        this.background = new BackgroundLevel();
        this.add(this.background);

        for (let i=0; i < 5; i++){
            let potion = new Potion();
            this.add(potion);
        }
        for (let i=0; i < 1; i++){
            let trash = new Trash();
            this.add(trash);
        }
        for (let i=0; i < 3; i++){
            let coin = new Coin();
            this.add(coin);
        }

        //feature will be added later on
        // this.trashcan = new Deposit(250, 550);
        // this.add(this.trashcan)

        this.ui = new UI();
        this.add(this.ui)

        this.platform1 = new Platform(40, 595, 650);
        this.add(this.platform1);

        this.platform2 = new Platform(400, 500, 200);
        this.add(this.platform2);

        this.enemy1 = new Raccoon(500, 300);
        this.add(this.enemy1);

        this.trap1 = new Trap(600, 565);
        this.add(this.trap1);
    }

    increasePotionScore(){
        if(this.potionsCollected >= this.goalPoints){
            //seen bool for game ready won (in player if at spawn point and true run win game here)
            this.#gameWon();
        } else {
            this.potionsCollected++;
        }
    }

    #gameWon(){
        console.log("Game Won");
        this.ui.gameWon();
        this.score = this.goalPoints;
    }
}


new Game()
