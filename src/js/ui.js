import { ScreenElement, Vector, Label, FontUnit, Color, Font, TextAlign, SpriteSheet } from "excalibur"
import { Resources } from './resources.js'


export class UI extends ScreenElement {

    #scoreText; 
    scorePlayer;

    potionsCollected;
    #potionsCollectedText;

    #hp; 
    #hpText;

    goal;
    sassMeter;

    onInitialize(engine) {
        this.scorePlayer = this.scene.engine.score;
        this.#hp = this.scene.engine.player.lives;
        this.potionsCollected = this.scene.engine.potionsCollected;
        this.goal = this.scene.engine.goalPoints;

        this.#createScoreText();
        this.#createHPText();
        this.#createPotionCollectedText();

        this.addChild(this.#scoreText);
        this.addChild(this.#hpText);
        this.addChild(this.#potionsCollectedText);
    }

    #createScoreText(){
        this.#scoreText = new Label({
            text: 'Score: 0',
            pos: new Vector(150, 50),
            font: new Font({
                family: 'Arial',
                size: 20,
                color:Color.White,
                unit: FontUnit.Px, // pixels are the default
                textAlign: TextAlign.Center
            })
        })
    }

    #createHPText(){
        this.#hpText = new Label({
            text: `HP: ${this.#hp}`,
            pos: new Vector(750, 50),
            font: new Font({
                family: 'Arial',
                size: 20,
                color:Color.White,
                unit: FontUnit.Px,
                textAlign: TextAlign.Center
            })
        })
    }

    #createPotionCollectedText(){
        this.#potionsCollectedText = new Label({
            text: `🔮 ${this.potionsCollected}/${this.goal}`,
            pos: new Vector(750, 100),
            font: new Font({
                family: 'Arial',
                size: 20,
                color:Color.White,
                unit: FontUnit.Px,
                textAlign: TextAlign.Center
            })
        })
    }


    updatePickups(type, amount){
        if(type === "potion"){
            this.updateScore(amount);
        } else if (type === "trash"){
            this.updateScore(amount);
        } else if (type === "coin"){
            this.updateScore(amount)
        }
    }

    updateScore(points) {
        this.scorePlayer += points;
        this.#scoreText.text = `Score: ${this.scorePlayer}`;
    }

    updatePotionsCollected(){
        this.potionsCollected = this.scene.engine.potionsCollected;
        this.#potionsCollectedText.text = `🔮 ${this.potionsCollected}/${this.goal}`;
    }

    updateLives(){
        this.#hp = this.scene.engine.player.lives;
        this.#hpText.text = `HP: ${this.#hp}`;
    }

    gameOver(){
        console.log("Game is over - ui")
        this.#removeLevel();
        this.#scoreText.text = `Game over`;
        this.#scoreText.color = Color.Red;
        this.#scoreText.size = 30;
    }

    gameWon(){
        console.log("game won - ui")
        this.#removeLevel();
        this.#scoreText.text = `Game won!`;
    }

    #removeLevel(){
        this.scene.engine.player.kill();
        this.scene.engine.platform1.kill();
        this.scene.engine.platform2.kill();
        this.scene.engine.trap1.kill();
        // this.scene.engine.trashcan.kill();

        this.#potionsCollectedText.text = ` `;
        this.#hpText.text = ` `;
    }
}