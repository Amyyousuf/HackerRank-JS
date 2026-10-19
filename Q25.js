function pickingNumbers(array){
    let maximum = 0;
    for (let i = 0; i < array.length; i++){
        let count1 = 0;
        let count2 = 0;
        for (let j = 0; j < array.length; j++){
            if(array[j] === array[i]){
                count1++;
            }
            if (array[j] === array[i] + 1){
                count2++;
            }
        }
        let total = count1 + count2;
        if (total > maximum){
            maximum = total;
        }
    }
    return maximum;
}
console.log(pickingNumbers([4, 6, 5, 3, 3, 1]));