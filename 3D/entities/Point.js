class Point {
    constructor(x = 0, y = 0, z = 0) {
        this.x = x;
        this.y = y;
        this.z = z;
    }

    changePoint(points = []) {
        this.x = points[0];
        this.y = points[1];
        this.z = points[2];
    }
}
