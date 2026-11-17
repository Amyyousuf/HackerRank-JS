
function absolutePermutation(n, k) {
    if (k === 0) { 
        return Array.from({ length: n }, (_, i) => i + 1);
    }
    if (n % (2 * k) !== 0) {
        return [-1];
    }
    let result = [];

    for (let i = 1; i <= n; i++) {
        if (Math.floor((i - 1) / k) % 2 === 0) {
            result.push(i + k);
        } else {
            result.push(i - k);
        }
    }
    return result;
}
console.log(absolutePermutation(2, 1));
