// function insertionSort(arr) {
//     let count = 0;

//     for (let i = 1; i < arr.length; i++){
//         let j = i -1;
//         let num = arr[i];

//         while (j>= 0 && arr[j] > num){
//                 arr[j + 1] = arr[j];
//                 count++;
//                 j--;
//         }
//         arr[j+1] = num;
//     } 
//     return count;  
// }
console.log(insertionSort([1, 1, 1, 2, 2]));
console.log(insertionSort([2, 1, 3, 1, 2]));


function insertionSort(arr) {
    if (arr.length <= 1){ //If an array has zero or one element, it is already sorted.
        return 0; //No shifts are required, so return 0.
    }  
    let mid = Math.floor(arr.length / 2);

    let left = arr.slice(0, mid);
    let right = arr.slice(mid);

    let count = insertionSort(left) + insertionSort(right); 
    // This is called recursion (a function calling itself).
    // We call the same function for both halves.
    // It sorts each half and returns the number of shifts needed within those halves.

    let i = 0, j = 0;
    let sorted = [];

    while (i < left.length && j < right.length) {
        if (left[i] <= right[j]) {
            sorted.push(left[i]);
            i++;
        } else {
            sorted.push(right[j]);
            count += left.length - i;
            j++;
        }
    }

    arr.splice(0, arr.length, ...sorted, ...left.slice(i), ...right.slice(j));

    return count;
}
