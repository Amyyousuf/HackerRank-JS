miniMaxSum([1, 3, 5, 7, 9]);

// function miniMaxSum(number){
//     let largest = number[0];
//     let smallest = number[0];
//     let sum = 0;

//     for (let i = 0; i < number.length; i++){
//         if (number[i] > largest){
//             largest = number[i];
//         } else if (number[i] < smallest){
//             smallest = number[i];
//         }
//         sum += number[i];
//     }
//         let minSum = sum - largest;
//         let maxSum = sum - smallest;
//         console.log(minSum, maxSum);
// }

function miniMaxSum(arr) {
    let sum = 0;

    for (let i = 0; i < arr.length; i++) {
        sum += arr[i];
    }

    let min = Math.min(...arr);
    let max = Math.max(...arr);

    console.log(sum - max, sum - min);
}

//HackerRank:
// 'use strict';

// process.stdin.resume();
// process.stdin.setEncoding('utf-8');

// let inputString = '';
// let currentLine = 0;

// process.stdin.on('data', function(inputStdin) {
//     inputString += inputStdin;
// });

// process.stdin.on('end', function() {
//     inputString = inputString.split('\n');

//     main();
// });

// function readLine() {
//     return inputString[currentLine++];
// }

// /*
//  * Complete the 'miniMaxSum' function below.
//  *
//  * The function accepts INTEGER_ARRAY arr as parameter.
//  */

// function miniMaxSum(arr) {
//     // Write your code here
//     let largest = arr[0];
//     let smallest = arr[0];
//     let sum = 0;

//     for (let i = 0; i < arr.length; i++){
//         if (arr[i] > largest){
//             largest = arr[i];
//         } else if (arr[i] < smallest){
//             smallest = arr[i];
//         }
//         sum += arr[i];
//     }
//         let minSum = sum - largest;
//         let maxSum = sum - smallest;
//         console.log(minSum, maxSum);
// }

// function main() {

//     const arr = readLine().replace(/\s+$/g, '').split(' ').map(arrTemp => parseInt(arrTemp, 10));

//     miniMaxSum(arr);
// }
