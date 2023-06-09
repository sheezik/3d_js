class SingleSurfaceHyperboloid extends Figure {
    constructor(a, b, c, count) {
        super();
        this.a = a;
        this.b = b;
        this.c = c;
        this.count = count;

        this.points = [];
        this.edges = [];
        this.polygons = [];
        let point = new Point(0, 0, 0);

        // точки
        for (let i = 0; i <= this.count; i++) {
            const tetta = Math.PI / this.count * i;
            for (let j = 0; j < this.count; j++) {
                const alpha =  2 * Math.PI / this.count * j;
                this.points.push(new Point(
                    point.x + this.a * Math.cosh(tetta) * Math.cos(alpha),
                    point.y + this.b * Math.cosh(tetta) * Math.sin(alpha),
                    point.z + this.c * Math.sinh(tetta)
                ))
            }
        }

        for (let i = 0; i <= this.count; i++) {
            const tetta = Math.PI / this.count * i;
            for (let j = 0; j < this.count; j++) {
                const alpha =  2 * Math.PI / this.count * j;
                this.points.push(new Point(
                    point.x - this.a * Math.cosh(tetta) * Math.cos(alpha),
                    point.y - this.b * Math.cosh(tetta) * Math.sin(alpha),
                    point.z - this.c * Math.sinh(tetta)
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

        for (let i = this.count + 1; i <= 2*this.count; i++) {
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
        // zebra
        // */
        for (let l = 0 ; l < this.polygons.length; l += 2) {
            for (let k = l; k < this.polygons.length; k += 20) {
                this.polygons[k].setColor('#d01010');
           
            }}
    }

}
