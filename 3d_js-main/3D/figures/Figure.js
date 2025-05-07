class Figure {
    constructor(figureColor = '#0088ff', pointsColor = '#d6ecf6',
                edgesColors = '#0e0e0e', depthPoints = 1.4, depthEdges = 2.4,
                center = new Point()) {
        this._figureColor = figureColor;
        this._pointsColor = pointsColor;
        this._edgesColors = edgesColors;
        this._depthPoints = depthPoints;
        this._depthEdges = depthEdges;

        this.center = center;
        this.animations = [];
    }

    dropAnimation() {
        this.animations = [];
    }

    setAnimation(method, value, center) {
        this.animations.push({method, value, center: center ? center : this.center});
    }

    updateAnimation(index, method, value, center) {
        this.animations[index] = {method, value, center: center ? center : this.center};
    }

    set figureColor(value) {
        this._figureColor = value;
    }

    set pointsColor(value) {
        this._pointsColor = value;
    }

    set edgesColors(value) {
        this._edgesColors = value;
    }

    set depthPoints(value) {
        this._depthPoints = value;
    }

    set depthEdges(value) {
        this._depthEdges = value;
    }

    get figureColor() {
        return this._figureColor;
    }

    get pointsColor() {
        return this._pointsColor;
    }

    get edgesColors() {
        return this._edgesColors;
    }

    get depthPoints() {
        return this._depthPoints;
    }

    get depthEdges() {
        return this._depthEdges;
    }
}
