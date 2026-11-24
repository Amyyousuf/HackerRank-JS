function compareTriplets(a, b) {
    let countAlice = 0;
    let countBob = 0;

    for (let i = 0; i < a.length; i++){
        if (a[i] > b[i]){
            countAlice++;
        } else if (a[i] < b[i]){
            countBob++;
        }
    }
    return [countAlice, countBob];
}
console.log(compareTriplets([1, 2, 3], [3, 2, 1]));
console.log(compareTriplets([17, 28, 30], [99, 16, 8]));