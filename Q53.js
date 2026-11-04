function insertionSort2(n, arr) {
    for (let i = 1; i < n; i++){
        let j = i -1;
        let num = arr[i];

        while (j>= 0 && arr[j] > num){
                arr[j + 1] = arr[j];
                j--;
        }
        arr[j+1] = num;
        console.log(arr.join(" "));
    }   
}
insertionSort2(6, [7, 4, 3, 5, 6, 2]);