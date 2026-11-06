//left < pivot
//right > pivot
//equal = pivot

function quickSort(arr) {
    let pivot = arr[0];
    let left = [];
    let right = [];
    let equal = [pivot];

    for (let element of arr){
        if (element < pivot){
            left.push(element);
        } else if (element > pivot){
            right.push(element);
        }
    }
    let combinedArray = [...left, ...equal, ...right];
    return combinedArray;
}
console.log(quickSort([4, 5, 3, 7, 2]));