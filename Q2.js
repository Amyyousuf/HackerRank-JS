// const numbers = [1, 2, 3, 4];
// console.log(simpleArraySum(numbers));

// function simpleArraySum(numbers){
//     let sum = 0;
//     for (let number of numbers){
//         sum += number;
//     }
//     return sum;
// }

//OR
function simpleArraySum(num){
    return num.reduce((total, num) => total + num, 0);
}
console.log(simpleArraySum([1, 2, 3, 4]));

//HackerRank:
// 'use strict';

// const fs = require('fs');

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
//  * Complete the 'simpleArraySum' function below.
//  *
//  * The function is expected to return an INTEGER.
//  * The function accepts INTEGER_ARRAY ar as parameter.
//  */

// function simpleArraySum(ar) {
//     // Write your code here
//    return ar.reduce((total, ar) => total + ar, 0);     
// }

// function main() {
//     const ws = fs.createWriteStream(process.env.OUTPUT_PATH);

//     const arCount = parseInt(readLine().trim(), 10);

//     const ar = readLine().replace(/\s+$/g, '').split(' ').map(arTemp => parseInt(arTemp, 10));

//     const result = simpleArraySum(ar);

//     ws.write(result + '\n');

//     ws.end();
// }
