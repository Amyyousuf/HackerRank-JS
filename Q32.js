//the same occurence value in an array
//Minus their index at which they occue
//compare both occured pairs from their difference and return their minimum else -1

function minimumDistances(a) {
    let minDistance = -1;
    
    for (let i = 0; i < a.length; i++){
        for (let j = i + 1; j < a.length; j++){
            if (a[i] === a[j]){
                let distance = j - i;
                if (minDistance === -1 || distance < minDistance){
                    minDistance = distance;
                }
            }
        }
    }
    return minDistance;
}
console.log(minimumDistances([7, 1, 3, 4, 1, 7]));