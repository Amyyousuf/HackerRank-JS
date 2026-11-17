
function surfaceArea(A) {
    let area = 0;
    let rows = A.length;
    let cols = A[0].length;

    for (let i = 0; i < rows; i++) {
        for (let j = 0; j < cols; j++) {
            let h = A[i][j];
            // Top and bottom
            area += 2;
            // Front
            area += Math.max(0, h - (i === 0 ? 0 : A[i - 1][j]));
            // Back
            area += Math.max(0, h - (i === rows - 1 ? 0 : A[i + 1][j]));
            // Left
            area += Math.max(0, h - (j === 0 ? 0 : A[i][j - 1]));
            // Right
            area += Math.max(0, h - (j === cols - 1 ? 0 : A[i][j + 1]));
        }
    }
    return area;
}
console.log(surfaceArea([[1]])); 