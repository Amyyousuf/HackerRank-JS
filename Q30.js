//difference b/w a number and it's reverse
//Beautiful numbers are defined as numbers where |i-reverse(i)| is evenly divisible by k
//return numbers of beautiful days
// i , j are range of numbers i.e 20, 23 --> 20, 21, 22, 23

function beautifulDays(i, j, k) {
    let count = 0;
    
    for (let day = i; day <= j; day++){
        let reversed = Number(String(day).split("").reverse().join(""));
        let difference = Math.abs(day - reversed);
        if (difference % k === 0){
            count++;
        }
    }
    return count;
}
console.log(beautifulDays(20, 23, 6));

// function beautifulDays(i, j, k){
//     let result = [];
//     let reverseOfResult = [];
//     let reversedOfRange = []; //reverse of result like 20 -> 02
//     let count = 0;
    
//     for (let day = i; day <= j; day++){
//         result.push(day); //array of day : [20, 21, 22, 23]
//         reverseOfResult = [...result].reverse(); //reverse of day array : [23, 22, 21, 20]

//         let reversed = Number(String(day).split("").reverse().join("")); //reverse of each value: [02, 12, 22, 32]
//         reversedOfRange.push(reversed); //to add in an array for display

//         let difference = Math.abs(day - reversed);

//         if (difference % k === 0){
//             count++;
//         }
//     }
//     console.log("Array: ", result);
//     console.log("Reverse of Array: ", reverseOfResult);
//     console.log("Reverse of values in array: ", reversedOfRange);   
    
//     return count;
// } 
// console.log("Beautiful Days: ", beautifulDays(20, 23, 6));
