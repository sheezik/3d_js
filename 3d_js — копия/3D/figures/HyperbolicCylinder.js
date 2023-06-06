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
        // zebra
        // */
        // for (let l = 0 ; l < 9; l += 2) {
        //     for (let k = l; k < this.polygons.length; k += 9) {
        //         this.polygons[k].setColor('#d01010');
             
          
        //     }}

            // шахматы
        // */
                //  for (let l = 0 ; l < this.polygons.length; l += 2) {
                //      for (let k = l; k < this.polygons.length; k += 20) {
                //          this.polygons[k].setColor('#d01010');
                    
                //      }}  
            // шахматы 2x2
        // */
        /**
         * CHESS BOARD 2 * 2
         *
         * */
    //     let k = 0;
    //     let h = 9;
    //     for (let i = 0;i<=1;i++){
    //     k+=(9-2)*i;
    //     h+=9*i;

    //     for (let i = k; i <= h; i += 4) {
    //         if (i < h)
    //         this.polygons[i].setColor('#7ff566')
    //     }

    //     for (let i = k + 1; i <= h; i += 4) {
    //         if (i < h)
    //         this.polygons[i].setColor('#7ff566')
    //     }

    //     k += 9;
    //     h += 9;
    //     for (let i = k; i <= h; i += 4) {
    //         if (i < h)
    //             this.polygons[i].setColor('#7ff566')
    //     }

    //     for (let i = k + 1; i <= h; i += 4) {
    //         if (i < h)
    //             this.polygons[i].setColor('#7ff566')
    //     }

    //     k += 9 + 2;
    //     h += 9;
    //     for (let i = k; i <= h; i += 4) {
    //         if (i < h)
    //             this.polygons[i].setColor('#7ff566')
    //     }

    //     for (let i = k + 1; i <= h; i += 4) {
    //         if (i < h)
    //             this.polygons[i].setColor('#7ff566')
    //     }

    //     k += 9;
    //     h += 9;
    //     for (let i = k; i <= h; i += 4) {
    //         if (i < h)
    //             this.polygons[i].setColor('#7ff566')
    //     }

    //     for (let i = k + 1; i <= h; i += 4) {
    //         if (i < h)
    //             this.polygons[i].setColor('#7ff566')
    //     }




    //     k += 9 - 2;
    //     h += 9;
    //     for (let i = k; i <= h; i += 4) {
    //         if (i < h)
    //             this.polygons[i].setColor('#7ff566')
    //     }

    //     for (let i = k + 1; i <= h; i += 4) {
    //         if (i < h)
    //             this.polygons[i].setColor('#7ff566')
    //     }

    //     k += 9;
    //     h += 9;
    //     for (let i = k; i <= h; i += 4) {
    //         if (i < h)
    //             this.polygons[i].setColor('#7ff566')
    //     }

    //     for (let i = k + 1; i <= h; i += 4) {
    //         if (i < h)
    //             this.polygons[i].setColor('#7ff566')
    //     }



    //     k += 9 + 2;
    //     h += 9;
    //     for (let i = k; i <= h; i += 4) {
    //         if (i < h)
    //             this.polygons[i].setColor('#7ff566')
    //     }

    //     for (let i = k + 1; i <= h; i += 4) {
    //         if (i < h)
    //             this.polygons[i].setColor('#7ff566')
    //     }

    //     k += 9;
    //     h += 9;
    //     for (let i = k; i <= h; i += 4) {
    //         if (i < h)
    //             this.polygons[i].setColor('#7ff566')
    //     }

    //     for (let i = k + 1; i <= h; i += 4) {
    //         if (i < h)
    //             this.polygons[i].setColor('#7ff566')
    //     }



    //     k += 9 - 2;
    //     h += 9;
    //     for (let i = k; i <= h; i += 4) {
    //         if (i < h)
    //             this.polygons[i].setColor('#7ff566')
    //     }

    //     for (let i = k + 1; i <= h; i += 4) {
    //         if (i < h)
    //             this.polygons[i].setColor('#7ff566')
    //     }

    //     k += 9;
    //     h += 9;
    //     for (let i = k; i <= h; i += 4) {
    //         if (i < h)
    //             this.polygons[i].setColor('#7ff566')
    //     }

    //     for (let i = k + 1; i <= h; i += 4) {
    //         if (i < h)
    //             this.polygons[i].setColor('#7ff566')
    //     }


    //     /**
    //      *
    //      * */

    //     k += 9 + 2;
    //     h += 9;
    //     for (let i = k; i <= h; i += 4) {
    //         if (i < h)
    //             this.polygons[i].setColor('#7ff566')
    //     }

    //     for (let i = k + 1; i <= h; i += 4) {
    //         if (i < h)
    //             this.polygons[i].setColor('#7ff566')
    //     }

    //     k += 9;
    //     h += 9;
    //     for (let i = k; i <= h; i += 4) {
    //         if (i < h)
    //             this.polygons[i].setColor('#7ff566')
    //     }

    //     for (let i = k + 1; i <= h; i += 4) {
    //         if (i < h)
    //             this.polygons[i].setColor('#7ff566')
    //     }


    //     k += 9 - 2;
    //     h += 9;
    //     for (let i = k; i <= h; i += 4) {
    //         if (i < h)
    //             this.polygons[i].setColor('#7ff566')
    //     }

    //     for (let i = k + 1; i <= h; i += 4) {
    //         if (i < h)
    //             this.polygons[i].setColor('#7ff566')
    //     }

    //     k += 9;
    //     h += 9;
    //     for (let i = k; i <= h; i += 4) {
    //         if (i < h)
    //             this.polygons[i].setColor('#7ff566')
    //     }

    //     for (let i = k + 1; i <= h; i += 4) {
    //         if (i < h)
    //             this.polygons[i].setColor('#7ff566')
    //     }


    //     k += 9 + 2;
    //     h += 9;
    //     for (let i = k; i <= h; i += 4) {
    //         if (i < h)
    //             this.polygons[i].setColor('#7ff566')
    //     }

    //     for (let i = k + 1; i <= h; i += 4) {
    //         if (i < h)
    //             this.polygons[i].setColor('#7ff566')
    //     }

    //     k += 9;
    //     h += 9;
    //     for (let i = k; i <= h; i += 4) {
    //         if (i < h)
    //             this.polygons[i].setColor('#7ff566')
    //     }

    //     for (let i = k + 1; i <= h; i += 4) {
    //         if (i < h)
    //             this.polygons[i].setColor('#7ff566')
    //     }


    //     k += 9 - 2;
    //     h += 9;
    //     for (let i = k; i <= h; i += 4) {
    //         if (i < h)
    //             this.polygons[i].setColor('#7ff566')
    //     }

    //     for (let i = k + 1; i <= h; i += 4) {
    //         if (i < h)
    //             this.polygons[i].setColor('#7ff566')
    //     }

    //     k += 9;
    //     h += 9;
    //     for (let i = k; i <= h; i += 4) {
    //         if (i < h)
    //             this.polygons[i].setColor('#7ff566')
    //     }

    //     for (let i = k + 1; i <= h; i += 4) {
    //         if (i < h)
    //             this.polygons[i].setColor('#7ff566')
    //     }

    //     k += 9 + 2;
    //     h += 9;
    //     for (let i = k; i <= h; i += 4) {
    //         if (i < h)
    //             this.polygons[i].setColor('#7ff566')
    //     }

    //     for (let i = k + 1; i <= h; i += 4) {
    //         if (i < h)
    //             this.polygons[i].setColor('#7ff566')
    //     } 
    // }


    //прорезать окно
    // this.polygons.splice(38,4);
    // this.polygons.splice(43,4);
    


    //Рандомные цвета
    // let color = [];
    // let r;
    // let g;
    // let b;
    // for (let i = 0; i < this.polygons.length; i++) {
    // r = Math.floor(Math.random() * (256));
    // g = Math.floor(Math.random() * (256));
    // b = Math.floor(Math.random() * (256));
    // color[i] = '#' + r.toString(16) + g.toString(16) + b.toString(16);
    // }
    // for (let i = 0; i < this.polygons.length; i++)
    // {
    //     this.polygons[i].setColor(color[i]);
    // }
    


    /**
         *
         
GRADIENT COLOR
*/

// let color = [];
// let r;
// let g;
// let b;
// let fuckingLength = (255 - 139) / this.polygons.length;
// let fuckingLength2 = ( -255) / this.polygons.length;
// for (let i = 0; i <= this.polygons.length; i++) {
//     r = Math.floor( 255 + i * fuckingLength2);
//     g = 0;
//     b = Math.floor(255 - i * fuckingLength2);
//     color[i] = '#' + r.toString(16) + g.toString(16) + b.toString(16);
// }

// for (let fuck = 0; fuck < this.polygons.length; fuck++) {
//     this.polygons[fuck].setColor(color[fuck]);
// }
















    }
}