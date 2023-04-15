class SphereLike extends Figure {
    constructor(a, b, c, count, point = new Point(0, 0, 0)) {
        super();
        this.count = count;

        this._a = a;
        this._b = b;
        this._c = c;

        this.points = [];
        this.edges = [];
        this.polygons = [];
        this.point = point;

        // точки
        for (let i = 0; i <= this.count; i++) {
            const tetta = Math.PI / this.count * i;
            for (let j = 0; j < this.count; j++) {
                const alpha =  2 * Math.PI / this.count * j;
                this.points.push(new Point(
                    this.point.x + this._a * Math.sin(tetta) * Math.cos(alpha),
                    this.point.y + this._b * Math.sin(tetta) * Math.sin(alpha),
                    this.point.z + this._c * Math.cos(tetta)
                ))
            }
        }

        // грани и полигоны
        for (let i = 0; i < this.count; i++) {
            let levelOfSphereRing = i * this.count;
            for (let k = 0; k < this.count - 1; k++) {
                this.edges.push(new Edge(k + levelOfSphereRing, k + levelOfSphereRing + this.count));
                this.edges.push(new Edge(k + levelOfSphereRing, k + levelOfSphereRing + 1));

                this.polygons.push(new Polygon([k + levelOfSphereRing, k + 1 + levelOfSphereRing,
                    k + 1 + this.count + levelOfSphereRing, k + this.count + levelOfSphereRing]));
            }
            this.edges.push(new Edge(this.count - 1 + levelOfSphereRing, levelOfSphereRing));
            this.edges.push(new Edge(this.count - 1 + levelOfSphereRing,
                this.count - 1 + levelOfSphereRing + this.count));

            this.polygons.push(new Polygon([this.count - 1 + levelOfSphereRing, levelOfSphereRing,
                levelOfSphereRing + this.count, this.count - 1 + levelOfSphereRing + this.count]));
        }

    }

    get a() {
        return this._a;
    }

    set a(value) {
        this._a = value;
    }

    get b() {
        return this._b;
    }

    set b(value) {
        this._b = value;
    }

    get c() {
        return this._c;
    }

    set c(value) {
        this._c = value;
    }
}
