class Graph_2D {
    constructor({
        id,
        canvasWidth,
        canvasHeight,
        Euler,
        callbacks}) {

        this.canvas = document.getElementById(id);
        this.canvas.width = canvasWidth;
        this.canvas.height = canvasHeight;

        this.context = this.canvas.getContext('2d');
        this.canvasWidth = canvasWidth;
        this.canvasHeight = canvasHeight;
        this.EulerWidth = Euler.width;
        this.EulerHeight = Euler.height;
        this.EulerLeft = Euler.left;
        this.EulerBottom = Euler.bottom;

        const { wheel, mouseup, mousedown, mousemove, mouseleave } = callbacks;

        this.canvas.addEventListener('wheel', wheel);
        this.canvas.addEventListener('mousedown', mousedown);
        this.canvas.addEventListener('mouseup', mouseup);
        this.canvas.addEventListener('mousemove', mousemove);
        this.canvas.addEventListener('mouseleave', mouseleave);
    }

    fromEulerToCanvas_X(x) {
        //return (x - this.EulerLeft) * this.canvasWidth / this. EulerWidth;
        return this.canvasWidth * (this. EulerWidth / 2 + x) / this.EulerWidth;
    }

    fromEulerToCanvas_Y(y) {
        //return (this.EulerHeight + this.EulerBottom - y) * this.canvasHeight / this.EulerHeight;
        return this.canvasHeight * (this.EulerHeight - (this.EulerHeight / 2 + y) ) / this.EulerHeight;
    }

    line(x1, y1, x2, y2, color = '#232121', width = 5) {
        this.context.beginPath();
        this.context.strokeStyle = color;
        this.context.lineWidth = width;

        this.context.moveTo(this.fromEulerToCanvas_X(x1), this.fromEulerToCanvas_Y(y1));
        this.context.lineTo(this.fromEulerToCanvas_X(x2), this.fromEulerToCanvas_Y(y2));

        this.context.stroke();
        this.context.closePath();
    }

    point(x, y, color = '#232121', size = 1) {
        this.context.beginPath();
        this.context.strokeStyle = color;
        this.context.fillStyle = color;
        this.context.arc(this.fromEulerToCanvas_X(x), this.fromEulerToCanvas_Y(y), size, 0, 2 * Math.PI);
        this.context.fill();
        this.context.stroke();
        this.context.closePath();
    }

    polygon(points = [], color = '#d6ecf6') {
        if (points.length >= 3) {
            this.context.beginPath();
            this.context.fillStyle = color;
            this.context.moveTo(this.fromEulerToCanvas_X(points[0].x), this.fromEulerToCanvas_Y(points[0].y));

            for (let i = 1; i < points.length; i++) {
                this.context.lineTo(this.fromEulerToCanvas_X(points[i].x), this.fromEulerToCanvas_Y(points[i].y));
            }

            this.context.fill();
            this.context.closePath();
        }
    }

    clear() {
        this.context.fillStyle = '#ffffff';
        this.context.fillRect(0, 0, this.canvasWidth, this.canvasHeight);
    }

}
