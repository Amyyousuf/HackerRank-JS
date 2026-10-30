function equalizeArray(arr) {
    let maxCount = 0;
    for (let i = 0; i < arr.length; i++){
        let count = 0;
        for (let j = 0; j < arr.length; j++){
            if (arr[i] === arr[j]){
                count++;
            }
        }
        if (count > maxCount){
            maxCount = count;
        }
    }
    return arr.length - maxCount;
}
console.log(equalizeArray([3, 3, 2, 1, 3]));