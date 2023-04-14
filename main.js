window.onload = function () {
    let initialFigure = new Cube();
    let graph_3D = new Graph_3D([initialFigure]);
    graph_3D.renderScene();
    new CubeSettings(initialFigure, graph_3D);

    document
        .getElementById('printPoints')
        .addEventListener('change', function() {
            if (this.checked) {
                graph_3D.renderPoints();
            } else {
                graph_3D.removePoints();
            }
        });

    document
        .getElementById('printEdges')
        .addEventListener('change', function() {
            if (this.checked) {
                graph_3D.renderEdges();
            } else {
                graph_3D.removeEdges();
            }
        });

    document
        .getElementById('printPolygons')
        .addEventListener('change', function() {
            if (this.checked) {
                graph_3D.renderPolygons();
            } else {
                graph_3D.removePolygons();
            }
        });

    document
        .getElementById('figures')
        .addEventListener('change', function() {
            switch (this.value) {
                case "cube":
                    let cube = new Cube();
                    graph_3D.removeAllFiguresFromScene();
                    graph_3D.getSceneFigures().push(cube);
                    graph_3D.renderScene();
                    new CubeSettings(cube, graph_3D);
                    break;
                case "cone":
                    let cone = new Cone();
                    cone.depthEdges = 0.4;
                    graph_3D.removeAllFiguresFromScene();
                    graph_3D.getSceneFigures().push(cone);
                    graph_3D.renderScene();
                    new CubeSettings(cone, graph_3D);
                    break;
                case "ellipsoid":
                    let ellipse = new Ellipse(10, 9, 7, 20);
                    graph_3D.removeAllFiguresFromScene();
                    graph_3D.getSceneFigures().push(ellipse);
                    graph_3D.renderScene();
                    new HyperboloidSettings(ellipse, graph_3D);
                    break;
                case "ellipticalParaboloid":
                    let ellipticalParaboloid = new EllipticalParaboloid();
                    ellipticalParaboloid.depthEdges = 0.8;
                    graph_3D.removeAllFiguresFromScene();
                    graph_3D.getSceneFigures().push(ellipticalParaboloid);
                    graph_3D.renderScene();
                    new HyperboloidSettings(ellipticalParaboloid, graph_3D);
                    break;
                case "hyperbolicParaboloid":
                    let hyperbolicParaboloid = new HyperbolicParaboloid();
                    hyperbolicParaboloid.depthEdges = 0.8;
                    graph_3D.removeAllFiguresFromScene();
                    graph_3D.getSceneFigures().push(hyperbolicParaboloid);
                    graph_3D.renderScene();
                    break;
                case "parabolicCylinder":
                    let parabolicCylinder = new ParabolicCylinder();
                    parabolicCylinder.depthEdges = 0.8;
                    graph_3D.removeAllFiguresFromScene();
                    graph_3D.getSceneFigures().push(parabolicCylinder);
                    graph_3D.renderScene();
                    new HyperboloidSettings(parabolicCylinder, graph_3D);
                    break;
                case "hyperbolicCylinder":
                    let hyperbolicCylinder = new HyperbolicCylinder();
                    hyperbolicCylinder.depthEdges = 0.8;
                    graph_3D.removeAllFiguresFromScene();
                    graph_3D.getSceneFigures().push(hyperbolicCylinder);
                    graph_3D.renderScene();
                    new HyperbolicCylinderSettings(hyperbolicCylinder, graph_3D);
                    break;
                case "single-surface-hyperboloid":
                    let singleSurfaceHyperboloid = new SingleSurfaceHyperboloid(10, 7, 7, 20);
                    graph_3D.removeAllFiguresFromScene();
                    graph_3D.getSceneFigures().push(singleSurfaceHyperboloid);
                    graph_3D.renderScene();
                    new HyperboloidSettings(singleSurfaceHyperboloid, graph_3D);
                    break;
                case "two-surface-hyperboloid":
                    let twoSurfaceHyperboloid = new TwoSurfaceHyperboloid(10, 7, 7, 20);
                    graph_3D.removeAllFiguresFromScene();
                    graph_3D.getSceneFigures().push(twoSurfaceHyperboloid);
                    graph_3D.renderScene();
                    new HyperboloidSettings(twoSurfaceHyperboloid, graph_3D);
                    break;
                case "sphere":
                    let sphere = new Sphere(10, 20);
                    graph_3D.removeAllFiguresFromScene();
                    graph_3D.getSceneFigures().push(sphere);
                    graph_3D.renderScene();
                    new SphereSettings(sphere, graph_3D);
                    break;
                case "ellipticalCylinder":
                    let ellipticalCylinder = new EllipticalCylinder(10, 10);
                    graph_3D.removeAllFiguresFromScene();
                    graph_3D.getSceneFigures().push(ellipticalCylinder);
                    graph_3D.renderScene();
                    new EllipticalCylinderSettings(ellipticalCylinder, graph_3D);
                    break;
                case "sunSystem":
                    let sun = new Sphere(8, 20);
                    sun.figureColor = "#debd30";
                    sun.pointsColor = "#debd30";
                    sun.edgesColors = "#413b3b";
                    sun.depthEdges = 0.4;

                    let notSun = new Sphere(4, 20, new Point(10, 10, 10));
                    notSun.figureColor = "#8f3e3e";
                    notSun.pointsColor = "#8f3e3e";
                    notSun.edgesColors = "#413b3b";
                    notSun.depthEdges = 0.4;

                    graph_3D.removeAllFiguresFromScene();
                    graph_3D.getSceneFigures().push(sun);
                    graph_3D.getSceneFigures().push(notSun);
                    graph_3D.renderScene();
            }
        });

}




