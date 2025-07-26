/**
 * @param {number[][]} image
 * @param {number} sr
 * @param {number} sc
 * @param {number} color
 * @return {number[][]}
 */
var floodFill = function(image, sr, sc, color) {
    const originalcolor=image[sr][sc];

    if (originalcolor === color) return image;
   function floodFillRec(r,c){

    if(r<0 || r>=image.length ||c<0||c>=image[0].length){
        return
    }

    if(image[r][c]!==originalcolor)return;
        image[r][c]=color

        floodFillRec(r+1,c);
        floodFillRec(r-1,c);
        floodFillRec(r,c+1);
        floodFillRec(r,c-1);

    }
    floodFillRec(sr,sc)
    return image;
    
};

let image = [[1,1,1],[1,1,0],[1,0,1]];
let sr = 1;
let sc = 1; 
let color = 2;


console.log(floodFill(image,sr,sc,color));
