class EllipticalCylinder extends Figure {
    constructor(a, b, count = 20, point = new Point(0, -10, 0)) {
        super();

        this._a = a;
        this._b = b;

        this.points = [];
        this.edges = [];
        this.polygons = [];
        this.count = count;
        this.point = point;

        // точки
        for (let i = 0; i <= this.count; i++) {
            for (let j = 0; j < 2*this.count; j++) {
                const alpha =  2 * Math.PI / (2*this.count) * j;
                this.points.push(new Point(
                    this.point.x + this._a *  Math.cos(alpha),
                    this.point.y + this._b * Math.sin(alpha),
                    this.point.z + i
                ))
            }
        }

        // грани и полигоны
        for (let i = 0; i < this.count; i++) {
            let levelOfSphereRing = i * 2 * this.count;
            for (let k = 0; k < 2*this.count - 1; k++) {
                this.edges.push(new Edge(k + levelOfSphereRing, k + levelOfSphereRing + 2*this.count));
                this.edges.push(new Edge(k + levelOfSphereRing, k + levelOfSphereRing + 1));

                this.polygons.push(new Polygon([k + levelOfSphereRing, k + 1 + levelOfSphereRing,
                    k + 1 + 2*this.count + levelOfSphereRing, k + 2*this.count + levelOfSphereRing]));
            }
            this.edges.push(new Edge(2*this.count - 1 + levelOfSphereRing, levelOfSphereRing));
            this.edges.push(new Edge(2*this.count - 1 + levelOfSphereRing,
                2*this.count - 1 + levelOfSphereRing + 2*this.count));

            this.polygons.push(new Polygon([2*this.count - 1 + levelOfSphereRing, levelOfSphereRing,
                levelOfSphereRing + 2*this.count, 2*this.count - 1 + levelOfSphereRing + 2*this.count]));
        }
    }
}