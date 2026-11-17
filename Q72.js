
function serviceLane(n, cases, width) {
    let result = [];

    for (let k = 0; k < cases.length; k++) {
        let start = cases[k][0];
        let end = cases[k][1];
        let min = 3;

        for (let i = start; i <= end; i++) {
            if (width[i] < min) {
                min = width[i];
            }
        }
        result.push(min);
    }
    return result;
}
console.log(serviceLane(8, [[0, 3], [4, 6], [6, 7], [3, 5], [0, 7]], [2, 3, 1, 2, 3, 2, 3, 3]));

//hackerrank:

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

// let width = [];

// function serviceLane(n, cases) {
//     let result = [];

//     for (let k = 0; k < cases.length; k++) {

//         let start = cases[k][0];
//         let end = cases[k][1];

//         let min = 3;

//         for (let i = start; i <= end; i++) {

//             if (width[i] < min) {
//                 min = width[i];
//             }
//         }

//         result.push(min);
//     }

//     return result;
// }

// function main() {
//     const ws = fs.createWriteStream(process.env.OUTPUT_PATH);

//     const firstMultipleInput = readLine().replace(/\s+$/, '').split(' ');

//     const n = parseInt(firstMultipleInput[0], 10);
//     const t = parseInt(firstMultipleInput[1], 10);

//     width = readLine().replace(/\s+$/, '').split(' ').map(widthTemp => parseInt(widthTemp, 10));

//     let cases = Array(t);

//     for (let i = 0; i < t; i++) {
//         cases[i] = readLine().replace(/\s+$/, '').split(' ').map(casesTemp => parseInt(casesTemp, 10));
//     }

//     const result = serviceLane(n, cases);

//     ws.write(result.join('\n') + '\n');

//     ws.end();
// }
