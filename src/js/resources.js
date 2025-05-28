import { ImageSource, Sound, Resource, Loader } from 'excalibur'

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

    //sprites
    TrashCan: new ImageSource('images/trashcan.png'),

    //player sprites


    //enemy sprites


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