class Cone extends Figure {
    constructor() {
        super();
        const PI = Math.PI;

        let R = 0;
        const h = 10;

        this.count = 20;
        this.points = [];
        this.edges = [];
        this.polygons = [];
        let point = new Point(0, 0, 0);

        let delta = 2 * PI / this.count;

        //Боковая поверхность нижнего конуса
        for (let p = 0; p <= h; p++) {
            for (let i = 0; i <= PI; i += delta * 2 + this.count) {
                for (let j = 0; j < 2 * PI; j += delta) {
                    const x = Math.cos(i) * Math.cos(j) * (R - p);
                    const y = -R - p;
                    const z = Math.sin(j) * (R - p);
                    this.points.push(new Point(x, y, z));
                }
            }
        }

        //Основание нижнего конуса
        for (let i = 0; i <= PI; i += delta) {
            for (let j = 0; j < 2 * PI; j += delta) {
                const x = R * Math.sin(i) * Math.sin(j);
                const y = -h;
                const z = R * Math.sin(i) * Math.cos(j);
                this.points.push(new Point(x, y, z));
            }
        }

        //Боковая поверхность верхнего конуса
        for (let p = 0; p <= h; p++) {
            for (let i = 0; i <= PI; i += delta * 2 + this.count) {
                for (let j = 0; j < 2 * PI; j += delta) {
                    const x = Math.cos(i) * Math.cos(j) * (R - p);
                    const y = R + p;
                    const z = Math.sin(j) * (R - p);
                    this.points.push(new Point(x, y, z));
                }
            }
        }

        //Основание верхнего конуса
        for (let i = 0; i <= PI; i += delta) {
            for (let j = 0; j < 2 * PI; j += delta) {
                const x = R * Math.sin(i) * Math.sin(j);
                const y = h;
                const z = R * Math.sin(i) * Math.cos(j);
                this.points.push(new Point(x, y, z));
            }
        }

        //Провести рёбра
        for (let i = 0; i < this.points.length; i++) {
            if ((i + 1) < this.points.length && (i + 1) % this.count !== 0) {
               this. edges.push(new Edge(i, i + 1))
            }
            if (i + this.count < this.points.length) {
                this.edges.push(new Edge(i, i + this.count))
            }
            if ((i + 1) >= this.count && (i + 1) % this.count === 0) {
                this.edges.push(new Edge(i, i - this.count + 1))
            }
        }

        //Провести полигоны
        for (let i = 0; i < this.points.length; i++) {
            if ((i + 1 + this.count) < this.points.length && (i + 1) % this.count !== 0) {
                this.polygons.push(new Polygon([i, i + 1, i + 1 + this.count, i + this.count]))
            } else if ((i + this.count) < this.points.length && (i + 1) % this.count === 0) {
                this.polygons.push(new Polygon([i, i + 1 - this.count, i + 1, i + this.count]))
            }
        }
    }
}
