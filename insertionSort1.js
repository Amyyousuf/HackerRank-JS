function insertionSort1(n, arr) {
    let lastElement = arr[n - 1]; //3
    let i;

    for (i = n - 2; i >= 0; i--){ //n-2 --> 5-2 --> 3
        if (arr[i] > lastElement){ //e.g. arr[3] = 8, 8 > 3 true
            arr[i + 1] = arr[i]; // arr[3+1] = arr[3], arr[4] = 8
            console.log(arr.join(" ")); //used to give space in between the numbers
        } else {
            break; //stops when condition fails i.e 2 > 3, so arr[0] stays 2
        }
    }
    arr[i + 1] = lastElement; //arr[0 + 1] = 3
    console.log(arr.join(" "));
}
insertionSort1(5, [2, 4, 6, 8, 3]);
