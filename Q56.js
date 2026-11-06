function runningTime(arr) {
    let count = 0;
    for (let i = 1; i < arr.length; i++){
        let j = i -1;
        let num = arr[i];

        while (j>= 0 && arr[j] > num){
                arr[j + 1] = arr[j];
                j--;
                count++;
        }
        arr[j+1] = num;
    }   
    return count;
}
console.log(runningTime([2, 1, 3, 1, 2]));