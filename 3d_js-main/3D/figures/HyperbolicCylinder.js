class HyperbolicCylinder extends Figure {
    constructor() {
        super();
        this.points = [];
        this.edges = [];
        this.polygons = [];
        this.count = 10;
        const size = 7;

        // Расставить точки
        for (let i = -this.count; i < this.count; i++) {
            for (let j = 0; j < this.count; j++) {
                const x = i + size/this.count;
                const y = x * x / size;
                const z = j - size;
                this.points.push(new Point(x, y+1, z));
            }
        }

        for (let i = -this.count; i < this.count; i++) {
            for (let j = 0; j < this.count; j++) {
                const x = i + size/this.count;
                const y = -x * x / size;
                const z = j - size;
                this.points.push(new Point(x, y-1, z));
            }
        }

        //Провести рёбра
        for (let i = 0; i < this.points.length/2; i++) {
            if ((i + 1) < this.points.length/2 && (i + 1) % this.count !== 0) {
                this.edges.push(new Edge(i, i + 1))
            }
            if (i + this.count < this.points.length/2) {
                this.edges.push(new Edge(i, i + this.count))
            }
            if (i + 1 + this.count < this.points.length/2 && (i + 1) % this.count !== 0) {
                this.polygons.push(new Polygon([i, i + 1, i + 1 + this.count, i + this.count]));
            }
        }

        for (let i = this.points.length/2; i < this.points.length; i++) {
            if ((i + 1) < this.points.length && (i + 1) % this.count !== 0) {
                this.edges.push(new Edge(i, i + 1))
            }
            if (i + this.count < this.points.length) {
                this.edges.push(new Edge(i, i + this.count))
            }
            if (i + 1 + this.count < this.points.length && (i + 1) % this.count !== 0) {
                this.polygons.push(new Polygon([i, i + 1, i + 1 + this.count, i + this.count]));
            }
        }
    }
}