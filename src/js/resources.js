import { ImageSource, Sound, Resource, Loader } from 'excalibur'

// voeg hier jouw eigen resources toe
const Resources = {
    Fish: new ImageSource('images/fish.png'),
    KirbyUmbrella: new ImageSource('images/kurby2.webp'),
    Star: new ImageSource('images/star.png'),
    Goomba: new ImageSource('images/goomba.png'),
    Background: new ImageSource('images/background.jpg')
}




const ResourceLoader = new Loader()
for (let res of Object.values(Resources)) {
    ResourceLoader.addResource(res)
}

export { Resources, ResourceLoader }