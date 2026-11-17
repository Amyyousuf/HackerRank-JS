function extraLongFactorials(n) {
    let result = 1n;
    for (let i =1n; i <= BigInt(n); i++){
        result *= i;
    }
    console.log(result.toString());
}
console.log(extraLongFactorials(25));
