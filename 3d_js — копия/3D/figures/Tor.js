class Tor extends Figure {
    constructor(r = 5, R = 15, count = 20, color = '#ffffff') {
        super({});
        //about points
        const points = [];
        const dt = Math.PI * 2 / count;
        for (let i = 0; i < Math.PI * 2; i += dt) {
            for (let j = 0; j < Math.PI * 2; j += dt) {
                points.push(new Point(
                    (R + r * Math.cos(i)) * Math.cos(j),
                    r * Math.sin(i),
                    (R + r * Math.cos(i)) * Math.sin(j)
                ));
            }
        }
        //about edges
        const edges = [];
        for (let i = 0; i < points.length; i++) {
            //вдоль
            if ((i + 1) % count === 0) {
                edges.push(new Edge(
                    i,
                    i + 1 - count
                ));
            } else {
                edges.push(new Edge(
                    i,
                    i + 1
                ));
            }
            //поперек
            if (points[i + count]) {
                edges.push(new Edge(
                    i,
                    i + count
                ));
            } else {
                edges.push(new Edge(
                    i,
                    count - (points.length - i)
                ));
            }
        }
        //about polygons
        const polygons = [];
        for (let i = 0; i < points.length; i++) {
            if (i + 1 + count < points.length && (i + 1) % count !== 0) {
                polygons.push(new Polygon([i, i + 1, i + 1 + count, i + count]));
            }
            if (i + count < points.length && (i + 1) % count === 0) {
                polygons.push(new Polygon([i, i + 1 - count, i + 1, i + count]));
            }
            if (!points[i + count] && i + 1 < points.length) {
                polygons.push(new Polygon([i, i + 1, count - (points.length - i) + 1, count - (points.length - i)]));
            }
            polygons.push(new Polygon([19, 0, 380, 399]));
        }
        polygons.sort((a, b) => b.distance - a.distance);

        this.points = points;
        this.edges = edges;
        this.polygons = polygons;


        // половинка
        // */
                //    for (let l = 0 ; l < 20; l +=2) {
                //         for (let k = l; k <this.polygons.length ; k += 40) 
                //         {
                //             this.polygons[k].setColor('#d01010');
                //         }
                //         for (let k = l+21; k <this.polygons.length ; k += 40) 
                //         {
                //             this.polygons[k].setColor('#d01010');
                //         }
                //       }


                /**
* ZEBRA
*
* */
// for (let i = 0; i < 2*count; i += 2) {
// for (let k = i; k < this.polygons.length; k += 4*count) {
// this.polygons[k].setColor('#7ff566')
// }
// }

/**
*
* Vertical zebra
* */
// for (let i = 0; i < 2*count; i += 4) {
// for (let k = i; k < this.polygons.length; k += 2*count) {
// this.polygons[k].setColor('#7ff566')
// }
// }

/**
*
* RANDOM COLOR
* */
// let color2 = [];
// let r2;
// let g2;
// let b2;
// for (let i = 0; i <= this.polygons.length; i++) {
// r2 = Math.floor(Math.random() * (256));
// g2 = Math.floor(Math.random() * (256));
// b2 = Math.floor(Math.random() * (256));
// color2[i] = '#' + r2.toString(16) + g2.toString(16) + b2.toString(16);
// }

// for (let fuck = 0; fuck < this.polygons.length; fuck++) {
// this.polygons[fuck].setColor(color2[fuck]);
// }
             
              






    }
}