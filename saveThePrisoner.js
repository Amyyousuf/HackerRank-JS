function saveThePrisoner(n, m, s) {
    let last = (s + m - 1) % n;

    if (last === 0) {
        return n;
    }

    return last;
}
console.log(saveThePrisoner(7, 19, 2));