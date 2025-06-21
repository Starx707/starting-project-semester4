//to exit simulation use: ^C
import '../css/style.css'
import { Engine, Vector, DisplayMode, SolverStrategy, Loader } from "excalibur"
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
import { Point } from './spawn-point.js'

export class Game extends Engine {

    player
    ui

    //scores
    score
    sassScore
    potionsCollected
    goalPoints
    goalReached

    //platforms/world
    startingPlatform
    mushroom1
    mushroom2
    mushroom3
    mushroom4
    mushroom5
    otherPlatform
    trashcan
    ball
    background

    //spawn point
    spawnPoint
    spawnx
    spawny

    //enemies
    setEnemy
    enemy1
    trap1
    trap2

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
                solver: SolverStrategy.Realistic,
                gravity: new Vector(0, 800),
            }
         })
        
        this.start(ResourceLoader).then(() => this.startGame())

        //standard variables
        this.score = 0;
        this.goalPoints = 4;
        this.potionsCollected = 0;
        this.goalReached = false;

        this.spawnx = 180;
        this.spawny = 530;

        this.gameOver = false;
        
    }

    startGame() {
 
        this.player = new PlayerCat(this.spawnx, this.spawny);
        this.add(this.player);

        this.background = new BackgroundLevel();
        this.add(this.background);

        for (let i=0; i < 7; i++){
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

        this.startingPlatform = new Platform(40, 595, 620);
        this.add(this.startingPlatform);

        this.mushroom1 = new Platform(515, 500, 180);
        this.add(this.mushroom1);

        this.mushroom2 = new Platform(780, 450, 180);
        this.add(this.mushroom2);

        this.mushroom3 = new Platform(550, 355, 150);
        this.add(this.mushroom3);

        this.mushroom4 = new Platform(310, 295, 180);
        this.add(this.mushroom4);

        this.mushroom5 = new Platform(60, 215, 180);
        this.add(this.mushroom5);

        this.otherPlatform = new Platform(910, 595, 620);
        this.add(this.otherPlatform);

        this.enemy1 = new Raccoon(500, 300);
        this.add(this.enemy1);

        this.trap1 = new Trap(640, 555);
        this.add(this.trap1);

        this.trap2 = new Trap(700, 555);
        this.add(this.trap2);

        this.spawnPoint = new Point(this.spawnx, this.spawny, 45);
        this.add(this.spawnPoint);

        Resources.BackgroundAudio.volume = 0.5;
        Resources.BackgroundAudio.loop = true;
        Resources.BackgroundAudio.play();
    }

    increasePotionScore(){
        if(this.potionsCollected >= this.goalPoints){
            this.goalReached = true;
        } else {
            this.potionsCollected++;
        }
    }

    gameWon(){
        this.ui.gameWon();
        this.score = this.goalPoints;
    }
}


new Game()
