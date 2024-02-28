class Collisions {
    static isPointRectangleCollision(point, rectangleCenter, width, height) {
        
        return false;
    }
    static isPointCircleCollision(point, circleCenter, circleRadius) {
        return false
    }
    static isCircleCircleCollision(centerOne, centerTwo, radiusOne, radiusTwo) {
        let distance = Math.sqrt((centerOne.x - centerTwo.x) ** 2 + (centerOne.y - centerTwo.y) ** 2)
        if (radiusOne + radiusTwo > distance)
            return true;
        return false;
    }

}

window.Collisions = Collisions
export default Collisions;