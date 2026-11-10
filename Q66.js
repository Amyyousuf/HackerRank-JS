function counterGame(n) {
    n = BigInt(n);
    let count = 0;

    while (n > 1n) {
        // Check if n is a power of 2
        if ((n & (n - 1n)) === 0n) {
            n = n / 2n;
        } else {
            let power = 1n;
            while (power * 2n < n) {
                power *= 2n;
            }
            n = n - power;
        }
        count++;
    }
    return count % 2 === 1 ? "Louise" : "Richard";
}
console.log(counterGame(6));