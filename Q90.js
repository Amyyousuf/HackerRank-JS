
function matrixRotation(matrix, r) {
    let m = matrix.length;
    let n = matrix[0].length;

    for (let layer = 0; layer < Math.min(m, n) / 2; layer++) {
        let cells = [];
        for (let j = layer; j < n - layer; j++)
            cells.push([layer, j]);
        for (let i = layer + 1; i < m - layer; i++)
            cells.push([i, n - layer - 1]);
        for (let j = n - layer - 2; j >= layer; j--)
            cells.push([m - layer - 1, j]);
        for (let i = m - layer - 2; i > layer; i--)
            cells.push([i, layer]);
        let values = cells.map(([i, j]) => matrix[i][j]);
        let shift = r % values.length;
        cells.forEach(([i, j], index) => {
            matrix[i][j] = values[(index + shift) % values.length];
        });
    }
    matrix.forEach(row => console.log(row.join(" ")));
}
matrixRotation([[1,2,3,4],[5,6,7,8],[9,10,11,12],[13,14,15,16]], 2);
