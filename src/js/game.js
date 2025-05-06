import '../css/style.css'
import { Actor, Engine, Vector, DisplayMode } from "excalibur"
import { Resources, ResourceLoader } from './resources.js'

export class Game extends Engine {

    constructor() {
        super({ 
            width: 800,
            height: 600,
            maxFps: 60,
            displayMode: DisplayMode.FitScreen
         })
        this.start(ResourceLoader).then(() => this.startGame())
    }

    startGame() {
        
        let y = Math.random() * 40;
        
        console.log("start de game!")
        const fish = new Actor()
        fish.graphics.use(Resources.Fish.toSprite())
        fish.pos = new Vector(500, 300)
        fish.vel = new Vector(-100,0)
        fish.events.on("exitviewport", (e) => this.fishLeft(e))
        this.add(fish)

        const floatingKirb = new Actor()
        floatingKirb.graphics.use(Resources.KirbyUmbrella.toSprite())
        floatingKirb.pos = new Vector(800, 700) 
        floatingKirb.vel = new Vector(-20, -30)
        floatingKirb.scale = new Vector(0.1,0.1)
        this.add(floatingKirb)

        for(let i = 0; i < 20; i++){
            let xpos = Math.random() * 800;
            let xvel = Math.random() * 800;
            let yvel = Math.random() * 800;

            const star = new Actor()
            star.graphics.use(Resources.Star.toSprite())
            star.pos = new Vector(xpos, 0);
            star.vel = new Vector(xvel, yvel);
            this.add(star)
            star.scale = new Vector(0.1, 0.1)
        }
    }

    fishLeft(e) {
        e.target.pos = new Vector(1350, 300)
    }
}

new Game()
