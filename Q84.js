function twoPluses(grid) {
    let rows = grid.length;
    let cols = grid[0].length;
    let pluses = [];

    // Step 1: Find all possible pluses
    for (let r = 0; r < rows; r++) {
        for (let c = 0; c < cols; c++) {
            if (grid[r][c] === "G") {
                let cells = [r * cols + c];
                // Center cell itself is a valid plus (area 1)
                pluses.push({
                    area: 1,
                    cells: [...cells]
                });
                let k = 1;
                // Expand the plus in all four directions
                while (
                    r - k >= 0 &&
                    r + k < rows &&
                    c - k >= 0 &&
                    c + k < cols &&
                    grid[r - k][c] === "G" &&
                    grid[r + k][c] === "G" &&
                    grid[r][c - k] === "G" &&
                    grid[r][c + k] === "G"
                ) {
                    cells.push(
                        (r - k) * cols + c,
                        (r + k) * cols + c,
                        r * cols + (c - k),
                        r * cols + (c + k)
                    );
                    let area = 4 * k + 1;
                    pluses.push({
                        area: area,
                        cells: [...cells]
                    });
                    k++;
                }
            }
        }
    }
    // Step 2: Find two non-overlapping pluses
    let maxProduct = 0;
    for (let i = 0; i < pluses.length; i++) {
        for (let j = i + 1; j < pluses.length; j++) {
            let first = pluses[i];
            let second = pluses[j];
            // Check whether they overlap
            let overlap = first.cells.some(cell =>
                second.cells.includes(cell)
            );
            if (!overlap) {
                let product = first.area * second.area;
                maxProduct = Math.max(maxProduct, product);
            }
        }
    }
    return maxProduct;
}
console.log(twoPluses(["GGGGGG", "GBBBGB", "GGGGGG", "GGBBGB", "GGGGGG"])); // 5
console.log(twoPluses(["BGBBGB", "GGGGGG", "BGBBGB", "GGGGGG", "BGBBGB", "BGBBGB"])); // 25
