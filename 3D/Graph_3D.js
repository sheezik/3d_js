class Graph_3D {
    constructor(figures = []) {
        this.WIN = {
            LEFT: -10,
            BOTTOM: -10,
            WIDTH: 20,
            HEIGHT: 20,
            FOCUS: new Point(0, 0, 30),
            CAMERA: new Point(0, 0, 50)
        };

        this.focus = new Point(0, 0, 30);
        this.camera = new Point(0, 0, 50);
        this.math_3D = new Math_3D({ WIN: this.WIN });

        this.light = new Light(-20, 20, 10);
        this.LIGHT = new Light(-20, 20, 10);

        let canvas_W = 500;
        let canvas_H = 500;

        this.canRenderPoints = true;
        this.canRenderEdges = true;
        this.canRenderPolygons = true;

        this.canvas = new Graph_2D({
            id: 'canvas',
            canvasWidth: canvas_W,
            canvasHeight: canvas_H,
            Euler: {width: 40, height: 40},
            callbacks : {
                wheel: (event) => this.wheel(event),
                mouseup: () => this.mouseUp(),
                mousedown: () => this.mouseDown(),
                mousemove: (event) => this.mouseMove(event),
                mouseleave: () => this.mouseLeave()
            }
        });

        this.scene = figures;
    }

    printPoints(figure) {
        figure.points.forEach(point => {
            this.canvas.point(point.x, point.y, figure.pointsColor, figure.depthPoints);
        })
    }

    printEdges(figure) {
        figure.edges.forEach(edge => {
            this.canvas.line(figure.points[edge.indexPoint_1].x, figure.points[edge.indexPoint_1].y,
                figure.points[edge.indexPoint_2].x, figure.points[edge.indexPoint_2].y, figure.edgesColors,
                figure.depthEdges);
        })
    }

    printPolygons(figure) {
        this.math_3D.calcCenters(figure);
        this.math_3D.calcDistance(figure, this.WIN.CAMERA, 'distance');
        this.math_3D.calcDistance(figure, this.LIGHT, 'lumen');
        this.math_3D.sortByArtistAlgorithm(figure.polygons);

        figure.polygons.forEach(polygon => {
            polygon.setColor(figure.figureColor);
            let {r, g, b} = polygon.color;
            const lumen = this.math_3D.calcIllumination(
                polygon.lumen,
                this.light.lumen
            );
            r = Math.round(r * lumen);
            g = Math.round(g * lumen);
            b = Math.round(b * lumen);

            const points = [
                figure.points[polygon.points[0]],
                figure.points[polygon.points[1]],
                figure.points[polygon.points[2]],
                figure.points[polygon.points[3]]
            ];

            this.canvas.polygon(
                points/*.map(point => {
                    return {
                        x: 2.4*this.math_3D.xs(point),
                        y: 2.4*this.math_3D.ys(point)
                    }
                })*/, polygon.rgbToHex(r, g, b)
            )
        })
    }

    wheel(event) {
        const delta = 1 + event.wheelDelta / 1200;
        this.scene.forEach(figure => {
            figure.points.forEach(point => {
                this.math_3D.zoom(delta, point);
            });
        })
        this.renderScene();
    }

    mouseUp() {
        this.canRotate = false;
    }

    mouseDown() {
        this.canRotate = true;
    }

    mouseLeave() {
        this.canRotate = false;
    }

    mouseMove(event) {
        if (this.canRotate) {
            const { movementX, movementY } = event;
            this.scene.forEach(figure => {
                figure.points.forEach(point => {
                    this.math_3D.rotateOY(movementX / 180, point);
                    this.math_3D.rotateOX(movementY / 180, point);
                });
            })
            this.renderScene();
        }
    }

    renderPoints() {
        this.canRenderPoints = true;
        this.renderScene();
    }

    renderPolygons() {
        this.canRenderPolygons = true;
        this.renderScene();
    }

    renderEdges() {
        this.canRenderEdges = true;
        this.renderScene();
    }

    renderScene() {
        this.canvas.clear();
        if (this.canRenderPolygons) this.scene.forEach(f => this.printPolygons(f));
        if (this.canRenderPoints) this.scene.forEach(f => this.printPoints(f));
        if (this.canRenderEdges) this.scene.forEach(f => this.printEdges(f));
    }

    removeAllFiguresFromScene() {
        while (this.scene.length !== 0) {
            this.scene.pop();
        }
    }

    removePoints() {
        this.canRenderPoints = false;
        this.renderScene();
    }

    removePolygons() {
        this.canRenderPolygons = false;
        this.renderScene();
    }

    removeEdges() {
        this.canRenderEdges = false;
        this.renderScene();
    }

    getSceneFigures() {
        return this.scene;
    }

}
