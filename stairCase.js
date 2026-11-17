let hash;
stairCase(4);

function stairCase(hash){
    for (let i = 1; i <= hash; i++){
        let row = "";
        for (let j = 1; j <= hash - i; j++){
            row += " ";
        }
        for (let k =1; k <= i; k++){
                row += "#";
        }
        console.log(row);
    }
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
//  * Complete the 'staircase' function below.
//  *
//  * The function accepts INTEGER n as parameter.
//  */

// function staircase(n) {
//     // Write your code here
//  for (let i = 1; i <= n; i++){
//         let row = "";
//         for (let j = 1; j <= n - i; j++){
//             row += " ";
//         }
//         for (let k =1; k <= i; k++){
//                 row += "#";
//         }
//         console.log(row);
//     }
// }

// function main() {
//     const n = parseInt(readLine().trim(), 10);

//     staircase(n);
// }
