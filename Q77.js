
function stones(n, a, b) {
    let result = new Set();

    for (let i = 0; i < n; i++) {
        let value = (n - 1 - i) * a + i * b;
        result.add(value);
    }

    return [...result].sort((x, y) => x - y);
}
console.log(stones(3, 1, 2));