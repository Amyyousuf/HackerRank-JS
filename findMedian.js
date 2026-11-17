function findMedian(arr) {
    arr.sort((a, b) => a - b);
    let middle = Math.floor(arr.length / 2);

    return arr[middle];
}
console.log(findMedian([0, 1, 2, 4, 6, 5, 3]));