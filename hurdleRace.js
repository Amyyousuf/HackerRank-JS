//k jumps unit
//if k is greater than maximun value in height array return 0
//if k is less than maximum value in height array return the difference

function hurdleRace(k, height){
    let maxValue = Math.max(...height);
    if(k > maxValue){
        return 0;
    } else if( k < maxValue){
        let count = maxValue - k;
        return count;
    }
}
console.log(hurdleRace(4, [1, 6, 3, 5, 2]));
console.log(hurdleRace(7, [2, 5, 4, 5, 2]));