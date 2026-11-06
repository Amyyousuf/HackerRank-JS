// function countingSort(arr) {
//     let result = [];

//     for (let i = 0; i < 100; i++){
//         result[i] = 0;
//     }
//     for (let i = 0; i < arr.length; i++){
//         result[arr[i]]++;
//     }
//     return result;
// }

function countingSort(arr) {
    let result = Array(100).fill(0); //creates an array of 100 elements (Array(100)) and all initially zero's (fill(0))

    for (let i = 0; i < arr.length; i++){
        result[arr[i]]++;
    }
    return result;
}
console.log(countingSort([1, 1, 3, 2, 1]));
