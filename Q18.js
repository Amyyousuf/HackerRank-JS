//return index of most frequently sighted type
//type = index 

console.log(migratoryBirds([1, 2, 3, 4, 5, 4, 3, 2, 1, 3, 4]));

function migratoryBirds(array) {
    let highestFrequencyValue = 0;
    let birdType = 0;
    let count = [0,0,0,0,0,0]; //because in question 5 types are mentioned

    for (let element of array)
        count[element]++;

    for(let i = 0; i < array.length; i++)
        if (count[i] > highestFrequencyValue){
            highestFrequencyValue = count[i];
            birdType = i;
        }
        
    return birdType;

}
