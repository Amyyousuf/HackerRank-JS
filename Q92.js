
function knightlOnAChessboard(n) {
    let result = [];

    for (let a = 1; a < n; a++) {
        let row = [];
        for (let b = 1; b < n; b++) {
            let dist = Array.from({ length: n }, () => Array(n).fill(-1));
            let queue = [[0, 0]];
            let head = 0;
            dist[0][0] = 0;

            let moves = [[a, b], [a, -b], [-a, b], [-a, -b], [b, a], [b, -a], [-b, a], [-b, -a]];
            while (head < queue.length) {
                let [x, y] = queue[head++];

                for (let [dx, dy] of moves) {
                    let nx = x + dx;
                    let ny = y + dy;

                    if (nx >= 0 && nx < n && ny >= 0 && ny < n && dist[nx][ny] === -1) {
                        dist[nx][ny] = dist[x][y] + 1;
                        queue.push([nx, ny]);
                    }
                }
            }
            row.push(dist[n - 1][n - 1]);
        }
        result.push(row.join(" "));
    }
    result.forEach(row => console.log(row));
}
knightlOnAChessboard(5);