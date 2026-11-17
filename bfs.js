
function bfs(n, m, edges, s) {
    let graph = Array.from({ length: n + 1 }, () => []);

    for (let [u, v] of edges) {
        graph[u].push(v);
        graph[v].push(u);
    }
    let dist = Array(n + 1).fill(-1);
    let queue = [s];
    let head = 0;
    dist[s] = 0;

    while (head < queue.length) {
        let node = queue[head++];
        for (let neighbor of graph[node]) {
            if (dist[neighbor] === -1) {
                dist[neighbor] = dist[node] + 6;
                queue.push(neighbor);
            }
        }
    }
    return dist.slice(1).filter((_, i) => i !== s - 1);
}
console.log(bfs(4, 2, [[1,2],[1,3]], 1)); 
