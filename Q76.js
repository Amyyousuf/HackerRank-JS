
function cavityMap(grid) {
    let result = grid.map(row => row.split(''));

    for (let i = 1; i < grid.length - 1; i++) {
        for (let j = 1; j < grid.length - 1; j++) {
            let current = Number(grid[i][j]);
            if (
                current > Number(grid[i - 1][j]) &&
                current > Number(grid[i + 1][j]) &&
                current > Number(grid[i][j - 1]) &&
                current > Number(grid[i][j + 1])
            ) {
                result[i][j] = 'X';
            }
        }
    }
    return result.map(row => row.join(''));
}
console.log(cavityMap(['1112', '1912', '1892', '1234']));