function bomberMan(n, grid) {
    if (n === 1) return grid; // First second: grid remains unchanged
    if (n % 2 === 0) { // Every even second: all cells contain bombs
        return grid.map(row => "O".repeat(row.length));
    }
    // Function to calculate the explosion
    function explode(current) {
        let rows = current.length;
        let cols = current[0].length;
        // Initially, all cells contain bombs
        let result = Array.from(
            { length: rows },
            () => Array(cols).fill("O")
        );
        // Check where the original bombs explode
        for (let r = 0; r < rows; r++) {
            for (let c = 0; c < cols; c++) {
                if (current[r][c] === "O") {
                    result[r][c] = ".";
                    if (r > 0) result[r - 1][c] = "."; // Up
                    if (r < rows - 1) result[r + 1][c] = "."; // Down
                    if (c > 0) result[r][c - 1] = "."; // Left
                    if (c < cols - 1) result[r][c + 1] = "."; // Right
                }
            }
        }
        return result.map(row => row.join(""));
    }
    let firstExplosion = explode(grid); // Explosion pattern after 3 seconds
    if (n % 4 === 3) {
        return firstExplosion;
    }
    return explode(firstExplosion); // Explosion pattern after 5 seconds
}
console.log(bomberMan(3, [".......",  "...O...",  "....O..", ".......", "OO.....", "OO....."]));
