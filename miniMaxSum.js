function miniMaxSum(arr) {
    let minimum = arr[0];
    let maximum = arr[0];
    let sum = 0;

    for (let i = 0; i < arr.length; i++){
        if (arr[i] > maximum){
            maximum = arr[i];
        } else if (arr[i] < minimum){
            minimum = arr[i];
        }
        sum += arr[i];
    }
    // for (let values of arr){
    //     if (values > maximum){
    //         maximum = values;
    //     } else if (values < minimum){
    //         minimum = values;
    //     }
    //     sum += values;
    // }
    
    const minSum = sum - maximum;
    const maxSum = sum - minimum;

    console.log(minSum, maxSum);
}
miniMaxSum([1, 3, 5,7, 9]);