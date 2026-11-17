
function beautifulTriplets(d, arr) {
    let count = 0;

    for (let i = 0; i < arr.length; i++) {
        let first = arr[i];
        let second = first + d;
        let third = first + (2 * d);

        if (arr.includes(second) && arr.includes(third)) {
            count++;
        }
    }
    return count;
}
console.log(beautifulTriplets(3, [1, 2, 4, 5, 7, 8, 10]))
