const matrix = [[1,2,3], [4,5,6], [9,8,9]];
function diagonalDifference (matrix){
    let left = 0;
    let right = 0;
    for (let i = 0; i < matrix.length; i++){
        left = left + matrix[i][i];
        right = right + matrix[i][matrix.length -1 - i];
    }
    return Math.abs(left-right);
}
console.log(diagonalDifference(matrix));
