class ParabolicCylinder extends Figure {
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
            if (i + 1 + this.count < this.points.length && (i + 1) % this.count !== 0) {
                this.polygons.push(new Polygon([i, i + 1, i + 1 + this.count, i + this.count],'#ffffff'));
            }
        }
         // zebra
        // */
                //   for (let l = 0 ; l < 9; l += 2) {
                //       for (let k = l; k < this.polygons.length; k += 9) {
                //           this.polygons[k].setColor('#d01010');
                       
                    
                //       }}

           // шахматы
        // */
        //         for (let l = 0 ; l < this.polygons.length; l += 2) {
        //             for (let k = l; k < this.polygons.length; k += 20) {
        //                 this.polygons[k].setColor('#d01010');
                    
        //             }}   
        
         // шахматы 2x2
        // */
        // let k = 0;
        // let h = 9;
        // for (let i = k; i <= h; i += 4) {
        //     if (i < h)
        //     this.polygons[i].setColor('#7ff566')
        // }

        // for (let i = k + 1; i <= h; i += 4) {
        //     if (i < h)
        //     this.polygons[i].setColor('#7ff566')
        // }

        // k += 9;
        // h += 9;
        // for (let i = k; i <= h; i += 4) {
        //     if (i < h)
        //         this.polygons[i].setColor('#7ff566')
        // }

        // for (let i = k + 1; i <= h; i += 4) {
        //     if (i < h)
        //         this.polygons[i].setColor('#7ff566')
        // }

        // k += 9 + 2;
        // h += 9;
        // for (let i = k; i <= h; i += 4) {
        //     if (i < h)
        //         this.polygons[i].setColor('#7ff566')
        // }

        // for (let i = k + 1; i <= h; i += 4) {
        //     if (i < h)
        //         this.polygons[i].setColor('#7ff566')
        // }

        // k += 9;
        // h += 9;
        // for (let i = k; i <= h; i += 4) {
        //     if (i < h)
        //         this.polygons[i].setColor('#7ff566')
        // }

        // for (let i = k + 1; i <= h; i += 4) {
        //     if (i < h)
        //         this.polygons[i].setColor('#7ff566')
        // }




        // k += 9 - 2;
        // h += 9;
        // for (let i = k; i <= h; i += 4) {
        //     if (i < h)
        //         this.polygons[i].setColor('#7ff566')
        // }

        // for (let i = k + 1; i <= h; i += 4) {
        //     if (i < h)
        //         this.polygons[i].setColor('#7ff566')
        // }

        // k += 9;
        // h += 9;
        // for (let i = k; i <= h; i += 4) {
        //     if (i < h)
        //         this.polygons[i].setColor('#7ff566')
        // }

        // for (let i = k + 1; i <= h; i += 4) {
        //     if (i < h)
        //         this.polygons[i].setColor('#7ff566')
        // }



        // k += 9 + 2;
        // h += 9;
        // for (let i = k; i <= h; i += 4) {
        //     if (i < h)
        //         this.polygons[i].setColor('#7ff566')
        // }

        // for (let i = k + 1; i <= h; i += 4) {
        //     if (i < h)
        //         this.polygons[i].setColor('#7ff566')
        // }

        // k += 9;
        // h += 9;
        // for (let i = k; i <= h; i += 4) {
        //     if (i < h)
        //         this.polygons[i].setColor('#7ff566')
        // }

        // for (let i = k + 1; i <= h; i += 4) {
        //     if (i < h)
        //         this.polygons[i].setColor('#7ff566')
        // }



        // k += 9 - 2;
        // h += 9;
        // for (let i = k; i <= h; i += 4) {
        //     if (i < h)
        //         this.polygons[i].setColor('#7ff566')
        // }

        // for (let i = k + 1; i <= h; i += 4) {
        //     if (i < h)
        //         this.polygons[i].setColor('#7ff566')
        // }

        // k += 9;
        // h += 9;
        // for (let i = k; i <= h; i += 4) {
        //     if (i < h)
        //         this.polygons[i].setColor('#7ff566')
        // }

        // for (let i = k + 1; i <= h; i += 4) {
        //     if (i < h)
        //         this.polygons[i].setColor('#7ff566')
        // }


        // /**
        //  *
        //  * */

        // k += 9 + 2;
        // h += 9;
        // for (let i = k; i <= h; i += 4) {
        //     if (i < h)
        //         this.polygons[i].setColor('#7ff566')
        // }

        // for (let i = k + 1; i <= h; i += 4) {
        //     if (i < h)
        //         this.polygons[i].setColor('#7ff566')
        // }

        // k += 9;
        // h += 9;
        // for (let i = k; i <= h; i += 4) {
        //     if (i < h)
        //         this.polygons[i].setColor('#7ff566')
        // }

        // for (let i = k + 1; i <= h; i += 4) {
        //     if (i < h)
        //         this.polygons[i].setColor('#7ff566')
        // }


        // k += 9 - 2;
        // h += 9;
        // for (let i = k; i <= h; i += 4) {
        //     if (i < h)
        //         this.polygons[i].setColor('#7ff566')
        // }

        // for (let i = k + 1; i <= h; i += 4) {
        //     if (i < h)
        //         this.polygons[i].setColor('#7ff566')
        // }

        // k += 9;
        // h += 9;
        // for (let i = k; i <= h; i += 4) {
        //     if (i < h)
        //         this.polygons[i].setColor('#7ff566')
        // }

        // for (let i = k + 1; i <= h; i += 4) {
        //     if (i < h)
        //         this.polygons[i].setColor('#7ff566')
        // }


        // k += 9 + 2;
        // h += 9;
        // for (let i = k; i <= h; i += 4) {
        //     if (i < h)
        //         this.polygons[i].setColor('#7ff566')
        // }

        // for (let i = k + 1; i <= h; i += 4) {
        //     if (i < h)
        //         this.polygons[i].setColor('#7ff566')
        // }

        // k += 9;
        // h += 9;
        // for (let i = k; i <= h; i += 4) {
        //     if (i < h)
        //         this.polygons[i].setColor('#7ff566')
        // }

        // for (let i = k + 1; i <= h; i += 4) {
        //     if (i < h)
        //         this.polygons[i].setColor('#7ff566')
        // }


        // k += 9 - 2;
        // h += 9;
        // for (let i = k; i <= h; i += 4) {
        //     if (i < h)
        //         this.polygons[i].setColor('#7ff566')
        // }

        // for (let i = k + 1; i <= h; i += 4) {
        //     if (i < h)
        //         this.polygons[i].setColor('#7ff566')
        // }

        // k += 9;
        // h += 9;
        // for (let i = k; i <= h; i += 4) {
        //     if (i < h)
        //         this.polygons[i].setColor('#7ff566')
        // }

        // for (let i = k + 1; i <= h; i += 4) {
        //     if (i < h)
        //         this.polygons[i].setColor('#7ff566')
        // }

        // k += 9 + 2;
        // h += 9;
        // for (let i = k; i <= h; i += 4) {
        //     if (i < h)
        //         this.polygons[i].setColor('#7ff566')
        // }

        // for (let i = k + 1; i <= h; i += 4) {
        //     if (i < h)
        //         this.polygons[i].setColor('#7ff566')
        // }

        // шахматы 3x3
        // */
//          let k = 0;
//          let h = 9;
//          for (let i = k; i <= h; i += 6) 
//          {
//              if (i+2 <= h)
//              {
//              this.polygons[i].setColor('#7ff566')
//              this.polygons[i+1].setColor('#7ff566')
//              this.polygons[i+2].setColor('#7ff566')
//              }
//         }
//         k+=9;
//         h+=9;
//         for (let i = k; i <= h; i += 6) 
//         {
//              if (i+2 <= h)
//              {
//              this.polygons[i].setColor('#7ff566')
//              this.polygons[i+1].setColor('#7ff566')
//              this.polygons[i+2].setColor('#7ff566')
//              }

//          }
//          k+=9;
//         h+=9;
//         for (let i = k; i <= h; i += 6) 
//         {
//              if (i+2 <= h)
//              {
//              this.polygons[i].setColor('#7ff566')
//              this.polygons[i+1].setColor('#7ff566')
//              this.polygons[i+2].setColor('#7ff566')
//              }

//          }


// ////////////

//          k+=12;
//          h+=12;
//           for (let i = k; i <= h; i += 9) 
//           {
//               if (i+2 <= h)
//               {
//               this.polygons[i].setColor('#7ff566')
//               this.polygons[i+1].setColor('#7ff566')
//               this.polygons[i+2].setColor('#7ff566')
//               }
//          }
//           k+=9;
//           h+=9;
//           for (let i = k; i <= h; i += 9) 
//           {
//                if (i+2 <= h)
//                {
//                this.polygons[i].setColor('#7ff566')
//                this.polygons[i+1].setColor('#7ff566')
//                this.polygons[i+2].setColor('#7ff566')
//                }

//            }
//             k+=9;
//           h+=9;
//           for (let i = k; i <= h; i += 9) 
//           {
//                if (i+2 <= h)
//                {
//                this.polygons[i].setColor('#7ff566')
//                this.polygons[i+1].setColor('#7ff566')
//                this.polygons[i+2].setColor('#7ff566')
//                }

//            }

// // ////////////
//          k+=6;
//          h+=6;
//           for (let i = k; i <= h; i += 6) 
//           {
//               if (i+2 <= h)
//               {
//               this.polygons[i].setColor('#7ff566')
//               this.polygons[i+1].setColor('#7ff566')
//               this.polygons[i+2].setColor('#7ff566')
//               }
//          }
//           k+=9;
//           h+=9;
//           for (let i = k; i <= h; i += 6) 
//            {
//                if (i+2 <= h)
//                {
//                this.polygons[i].setColor('#7ff566')
//                this.polygons[i+1].setColor('#7ff566')
//                this.polygons[i+2].setColor('#7ff566')
//                }

//             }
//             k+=9;
//           h+=9;
//           for (let i = k; i <= h; i += 6) 
//            {
//                if (i+2 <= h)
//                {
//                this.polygons[i].setColor('#7ff566')
//                this.polygons[i+1].setColor('#7ff566')
//                this.polygons[i+2].setColor('#7ff566')
//                }

//             }

// // ///////////////////
//            k+=12;
//          h+=12;
//           for (let i = k; i <= h; i += 9) 
//           {
//               if (i+2 <= h)
//               {
//               this.polygons[i].setColor('#7ff566')
//               this.polygons[i+1].setColor('#7ff566')
//               this.polygons[i+2].setColor('#7ff566')
//               }
//          }
//           k+=9;
//           h+=9;
//           for (let i = k; i <= h; i += 9) 
//           {
//                if (i+2 <= h)
//                {
//                 this.polygons[i].setColor('#7ff566')
//                 this.polygons[i+1].setColor('#7ff566')
//                 this.polygons[i+2].setColor('#7ff566')
//                }

//            }
//            k+=9;
//           h+=9;
//           for (let i = k; i <= h; i += 9) 
//           {
//                if (i+2 <= h)
//                {
//                 this.polygons[i].setColor('#7ff566')
//                 this.polygons[i+1].setColor('#7ff566')
//                 this.polygons[i+2].setColor('#7ff566')
//                }

//            }
// ////////////////
//          k+=6;
//          h+=6;
//           for (let i = k; i <= h; i += 6) 
//           {
//               if (i+2 <= h)
//               {
//               this.polygons[i].setColor('#7ff566')
//               this.polygons[i+1].setColor('#7ff566')
//               this.polygons[i+2].setColor('#7ff566')
//               }
//          }
//           k+=9;
//           h+=9;
//           for (let i = k; i <= h; i += 6) 
//            {
//                if (i+2 <= h)
//                {
//                this.polygons[i].setColor('#7ff566')
//                this.polygons[i+1].setColor('#7ff566')
//                this.polygons[i+2].setColor('#7ff566')
//                }

//             }
//             k+=9;
//           h+=9;
//           for (let i = k; i <= h; i += 6) 
//            {
//                if (i+2 <= h)
//                {
//                this.polygons[i].setColor('#7ff566')
//                this.polygons[i+1].setColor('#7ff566')
//                this.polygons[i+2].setColor('#7ff566')
//                }

//             }
// //////////////////////
//         k+=12;
//          h+=12;
//           for (let i = k; i <= h; i += 9) 
//           {
//               if (i+2 <= h)
//               {
//               this.polygons[i].setColor('#7ff566')
//               this.polygons[i+1].setColor('#7ff566')
//               this.polygons[i+2].setColor('#7ff566')
//               }
//          }
//           k+=9;
//           h+=9;
//           for (let i = k; i <= h; i += 9) 
//           {
//                if (i+2 <= h)
//                {
//                 this.polygons[i].setColor('#7ff566')
//                 this.polygons[i+1].setColor('#7ff566')
//                 this.polygons[i+2].setColor('#7ff566')
//                }

//            }
//            k+=9;
//           h+=9;
//           for (let i = k; i <= h; i += 9) 
//           {
//                if (i+2 <= h)
//                {
//                 this.polygons[i].setColor('#7ff566')
//                 this.polygons[i+1].setColor('#7ff566')
//                 this.polygons[i+2].setColor('#7ff566')
//                }

//            }
// ////////////////
//         k+=6;
//          h+=6;
//           for (let i = k; i <= h; i += 6) 
//           {
//               if (i+2 <= h)
//               {
//               this.polygons[i].setColor('#7ff566')
//               this.polygons[i+1].setColor('#7ff566')
//               this.polygons[i+2].setColor('#7ff566')
//               }
//          }





    }
}
