
function closestNumbers(arr) {
    let minDiff = Infinity;
    let result = [];
    arr.sort((a, b) => a - b);

    for (let i = 0; i < arr.length; i++){
       for (let j = i + 1; j < arr.length; j++){ 
        let difference = Math.abs(arr[i] - arr[j]);

        if (difference < minDiff) {
            minDiff = difference;
            result = [arr[i], arr[j]];
        } else if (difference === minDiff) {
            result.push(arr[i], arr[j]);
            }
        }
    }
    return result;
}
console.log(closestNumbers([5, 4, 3, 2]));