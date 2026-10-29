//n/d = 0, find count
//n --> number, d --> break n in digits, like 102 --> 1, 0, 2
//toString() --> converts whole number to string i.e. 12 to "12"
//Number(digits[i]) --> converts each digit to number 

function findDigits(n) {
    let count = 0;
    let digits = n.toString();
    for (let i = 0; i < digits.length; i++){
        let d = Number(digits[i]);
        if (d !== 0 && n % d === 0){
            count++;
        }
    }
    return count;
}

console.log(findDigits(12));
console.log(findDigits(1012));