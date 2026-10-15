//the number must be divisible by every number in array a
//the number must divide every number in array b, without a remainder i.e number should be smallest than elements in b so it can divide
let a = [2, 6];
let b = [24, 36];
console.log(getTotalX(a, b));

function getTotalX(a, b){
    let count = 0;
    for (let num = 1; num <= Math.min(...b); num++){
        let condition1 = a.every(x => num % x === 0);
        let condition2 = b.every(x => x % num === 0);
        if (condition1 && condition2){
            count++;
        }
    }
    return count;
}
