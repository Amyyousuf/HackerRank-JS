// function diagonalDifference(arr) {
//     let left = [];
//     let right = [];
    
//     for (let i = 0; i < arr.length; i++){
//         left.push(arr[i][i]);
//         right.push(arr[(arr.length - 1) - i][i]);    
//     }
//     const leftSum = left.reduce((leftSum, result) => leftSum + result, 0);
//     const rightSum = right.reduce((rightSum, result1) => rightSum + result1, 0);
//     const difference = Math.abs(leftSum - rightSum);
    
//     return difference;
// }

function diagonalDifference(arr) {
    let left = 0;
    let right = 0;
    
    for (let i = 0; i < arr.length; i++){
        left += arr[i][i]; //adds i.e. 0 --> 0+1:1 --> 0+1+5:6 --> 0+1+5+9:15
        /*
        when i = 0; left = arr[0][0] --> 1
        when i = 1; left = arr[1][1] --> 5
        when i = 2; left = arr[2][2] --> 9
        */
        right += arr[(arr.length - 1) - i][i]; //adds i.e. 0 --> 0+9:9 --> 0+9+5:14 --> 0+9+5+3:17 
        /*
        when i = 0; right = arr[(3 - 1) - 0][0] --> arr[2][0] --> 9
        when i = 1; right = arr[(3 - 1) - 1][1] --> arr[1][1] --> 5
        when i = 2; right = arr[(3 - 1) - 2][2] --> arr[0][2] --> 3
        */
    }
    return Math.abs(left - right);
}
console.log(diagonalDifference([[1, 2, 3], [4, 5, 6], [9, 8, 9]]));
console.log(diagonalDifference([[11, 2, 4], [4, 5, 6], [10, 8, -12]]));