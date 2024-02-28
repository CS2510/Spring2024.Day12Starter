import "./FollowMouseComponent.js"
import "./CheckCollisionsComponentCircle.js"
import "./CheckCollisionsComponentRectangle.js"

class MainScene extends Scene {
  constructor() {
    super("white")

     // A infinitely small point that will follow the mouse cursor
     let mouseCursorGameObject = new GameObject("MouseCursorGameObject")
     mouseCursorGameObject.addComponent(new Point())
     mouseCursorGameObject.addComponent(new FollowMouseComponent())
     this.gameObjects.push(mouseCursorGameObject)

    //A circle against which we will do collision detection.
    let collisionCircleGameObject = new GameObject("CollisionCircleGameObject")
    collisionCircleGameObject.addComponent(new Circle())
    collisionCircleGameObject.addComponent(new CheckCollisionsComponentCircle())
    collisionCircleGameObject.transform.x = 100;
    collisionCircleGameObject.transform.y = 100;
    collisionCircleGameObject.transform.scaleX = 50
    this.gameObjects.push(collisionCircleGameObject);


    


   
  }

}

window.MainScene = MainScene
export default MainScene;