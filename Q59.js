function countingSort(arr) {
    let result = [];

    for (let i = 0; i < 100; i++){
        result[i] = 0;
    }
    for (let i = 0; i < arr.length; i++){
        result[arr[i]]++;
    }
    let output = [];
    for (let i = 0; i < 100; i++){
        for (let j = 0; j < result[i]; j++){
            output.push(i);
        }
    }
    return output;
}

// function countingSort(arr) {
//     let result = Array(100).fill(0); //creates an array of 100 elements (Array(100)) and all initially zero's (fill(0))

//     for (let i = 0; i < arr.length; i++){
//         result[arr[i]]++;
//     }
//     let output = [];
//     for (let i = 0; i < 100; i++){
//         for (let j = 0; j < result[i]; j++){
//             output.push(i);
//         }
//     }
//     return output;
// }

console.log(countingSort([1, 1, 3, 2, 1]));
