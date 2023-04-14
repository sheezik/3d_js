class EllipticalParaboloid extends Figure {
    constructor() {
        super();
        this.points = [];
        this.edges = [];
        this.polygons = [];
        this.count = 20;

        const PI = Math.PI;
        let delta = 2 * PI / this.count;
        let R = 10;

        // Расставить точки
        for (let i = 0; i <= PI; i += delta) {
            for (let j = 0; j < 2 * PI; j += delta) {
                const x = R * Math.sin(i) * Math.cos(j) / 4;
                const y = R * Math.sin(i) * Math.sin(j) / 4;
                const z = x * x / 2 + y * y / 2;
                this.points.push(new Point(x, y, z));
            }
        }

        //Провести рёбра
        for (let i = 0; i < this.points.length; i++) {
            if ((i + 1) < this.points.length && (i + 1) % this.count !== 0) {
                this.edges.push(new Edge(i, i + 1))
            }
            if (i + this.count < this.points.length) {
                this.edges.push(new Edge(i, i + this.count))
            }
        }

        //Полигоны
        for (let i = 0; i < this.points.length; i++) {
            if ((i + 1 + this.count) < this.points.length && (i + 1) % this.count !== 0) {
                this.polygons.push(new Polygon([i, i + 1, i + 1 + this.count, i + this.count]))
            } else if ((i + this.count) < this.points.length && (i + 1) % this.count === 0) {
                this.polygons.push(new Polygon([i, i + 1 - this.count, i + 1, i + this.count]))
            }
        }
    }
}
