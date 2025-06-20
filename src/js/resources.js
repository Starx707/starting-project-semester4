import { ImageSource, Sound, Resource, Loader } from 'excalibur'
import { Raccoon } from './raccoon'

// voeg hier jouw eigen resources toe
const Resources = {
    //images
    FishSprite: new ImageSource('images/fish.png'),
    KirbyUmbrella: new ImageSource('images/kurby2.webp'),
    Star: new ImageSource('images/star.png'),
    Goomba: new ImageSource('images/goomba.png'),
    Background: new ImageSource('images/background.jpg'),
    PlayerCat: new ImageSource('images/cat-idle-v1.png'),
    FishBone: new ImageSource('images/collectable-fish.png'),

    //backgrounds
    TheHouse: new ImageSource('images/backgrounds/startingimage.png'),

    //sprites
    TrashCan: new ImageSource('images/trashcan.png'),
    Potion1: new ImageSource('images/Potion1.png'),
    Spikes: new ImageSource ('images/spikes.png'),
    Coin: new ImageSource ('images/coin1.png'),
    Glasses: new ImageSource('images/glasses.png'),
    PinkGlasses: new ImageSource('images/pink-glasses.png'),
    Ball: new ImageSource('images/ball.webp'),

    //player sprites


    //enemy sprites
    RaccoonEnemy: new ImageSource('images/raccoon_idle_frame1.png'),
    Dogge: new ImageSource('images/instakillDog.png'),

    //ui
    HPFull: new ImageSource('images/hp/hearts-3.png'),
    HPTwo: new ImageSource('images/hp/hearts-2.png'),
    HPOne: new ImageSource('images/hp/hearts-1.png'),
    HPNone: new ImageSource('images/hp/hearts-0.png'),

    //fonts
    
}




const ResourceLoader = new Loader()
for (let res of Object.values(Resources)) {
    ResourceLoader.addResource(res)
}

export { Resources, ResourceLoader }