//return length of array in each operation

function cutTheSticks(arr) {
    let result = [];

    while(arr.length > 0){
        result.push(arr.length);

        let count = 0;
        let minValue = Math.min(...arr);
        let newArray = [];
        for(let i = 0; i < arr.length; i++){
            let diff = arr[i] - minValue;

            if(diff === 0){
                count++;
            } else{
                newArray.push(diff);
            }
        }
        arr = newArray;
    }
    return result;
}

// function cutTheSticks(arr) {
//     let result = [arr.length];

//     arr.sort((a,b) => a - b); //1,1,2,2,3,3,3,4

//     for(let i = 1; i < arr.length; i++){
//          if(arr[i] > arr[i-1]) {
//             result.push(arr.length - i);
//         }
//     }
//     return result;
// }
console.log(cutTheSticks([1, 2, 3, 4, 3, 3, 2, 1]));
