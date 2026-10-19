
function countingValleys(steps, path) { 
    let seaLevel = 0;  
    let valley = 0; //Number of valleys

    for (let step of path) {
        if (step === 'U') {
            seaLevel++;
        } else{
            seaLevel--;
        }
        if (seaLevel === 0 && step == 'U'){
            valley++;
        }
    }
    return valley;
}

const result = countingValleys(8, ['D','D','U','U','U','U','D','D']);
console.log(result);