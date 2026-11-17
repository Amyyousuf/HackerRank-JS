
function strangeCounter(t) {
    let start = 3;
    let cycleStart = 1;

    while (cycleStart + start <= t) { 
        cycleStart += start;
        start *= 2;
    }
    return start - (t - cycleStart); 
}
console.log(strangeCounter(4));
