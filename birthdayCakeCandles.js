// function birthdayCakeCandles(candles) {
//     let tallest = candles[0];
//     let tallestCount = 0;

//     for (let i = 0; i < candles.length; i++){
//         if (candles[i] > tallest){
//             tallest = candles[i];
//         }
//         if(tallest === candles[i]){
//             tallestCount++;
//         }
//     }
//     return tallestCount;
// }

function birthdayCakeCandles(candles) {
    let tallest = Math.max(...candles);
    let count = 0;

    for (let elements of candles){
        if (elements === tallest){
            count++;
        }
    }
    return count;
}
console.log(birthdayCakeCandles([4, 4, 1, 3]));