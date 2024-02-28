import "./FollowMouseComponent.js"
import "./CheckCollisionsComponent.js"

class MainScene extends Scene {
  constructor() {
    super("white")

    //A circle against which we will do collision detection.
    let collisionCircleGameObject = new GameObject("CollisionCircleGameObject")
    collisionCircleGameObject.addComponent(new Circle())
    collisionCircleGameObject.addComponent(new CheckCollisionComponent())
    collisionCircleGameObject.transform.x = 100;
    collisionCircleGameObject.transform.y = 100;

    this.gameObjects.push(collisionCircleGameObject);

    // A infinitely small point that will follow the mouse cursor
    let mouseCursorGameObject = new GameObject("MouseCursorGameObject")
    mouseCursorGameObject.addComponent(new Point())
    mouseCursorGameObject.addComponent(new FollowMouseComponent())
    this.gameObjects.push(mouseCursorGameObject)
  }

}

window.MainScene = MainScene
export default MainScene;