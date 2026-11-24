// for loop: Manually iterates through an array, giving you control over each iteration.
// reduce(): Automatically iterates through an array and combines its elements into a single result using an accumulator.

function simpleArraySum(ar) {
    // let sum = 0;
    // for (let i = 0; i < ar.length; i++){
    //     sum += ar[i];
    // }
    // return sum;
    const sum = ar.reduce((sum, result) => sum + result, 0);
    return sum;
}
console.log(simpleArraySum([1, 2, 3]));