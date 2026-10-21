//startPoint = starting point of Sam's house : 7
//endPoint = ending point of Sam's house : 10
//locApple = location of apple tree : 4
//locOrange = location of orange tree : 12
//dApple = distance of where apple fall : [2, 3, -4]
//dOrange = distance of where orange fall : [3, -2, -4]

// function countApplesAndOranges(startPoint, endPoint, locApple, locOrange, dApple, dOrange){
//     const countApple = dApple.map(dApple => dApple + locApple);
//     const countOrange = dOrange.map(dOrange => dOrange + locOrange);
//     let apple = 0;
//     let orange = 0;

//     for (let element of countApple){
//         if (element >= startPoint && element <= endPoint)
//             apple++;
//     }
//     for (let element of countOrange){
//         if (element >= startPoint && element <= endPoint)
//             orange++;
//     }
//     return {apple, orange};
// }
function countApplesAndOranges(s, t, a, b, apples, oranges) {
    // Write your code here
    const countApple = apples.map(apples => apples + a);
    const countOrange = oranges.map(oranges => oranges + b);
    let apple = 0;
    let orange = 0;

    for (let element of countApple){
        if (element >= s && element <= t)
            apple++;
    }
    for (let element of countOrange){
        if (element >= s && element <= t)
            orange++;
    }
    //return {countApple, countOrange, apple, orange};
    return (apple + "\n" + orange);
}
console.log(countApplesAndOranges(7, 10, 4, 12, [2, 3, -4], [3, -2, -4]));
