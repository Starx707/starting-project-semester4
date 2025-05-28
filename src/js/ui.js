import { ScreenElement, Vector, Label, FontUnit, Color, Font, TextAlign, SpriteSheet } from "excalibur"
import { Resources } from './resources.js'


export class UI extends ScreenElement {

    scoreText; //this makes this variable global
    score;

    collected;
    collectedText;

    sassMeter;

    trashLeft;

    #hp; //to still show this make a function that will return this variables value

    onInitialize(engine) {
        this.score = 0;
        this.#hp = this.scene.engine.player.lives; //change to function
        this.scoreText = new Label({
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

        this.hpText = new Label({
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




        this.addChild(this.scoreText)
        this.addChild(this.hpText)
    }

    updateScore() { //by adding # to functions you can make them private as well
        this.score += 1;
        console.log(this.scoreText);
        this.scoreText.text = `Score: ${this.score}`;
    }
}