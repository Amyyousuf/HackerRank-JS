//palindromes --> can be read same from forward and backward
//Math.floor(s.length/2) --> checks half the string to compare from both ends

function theLoveLetterMystery(s) {
    let count = 0;
    
    for (let i = 0; i < Math.floor(s.length/2); i++){
        let first = s[i].charCodeAt(0);
        let last = s[s.length - 1 - i].charCodeAt(0);
        
        count += Math.abs(first - last);
    }
    return count;
}
console.log(theLoveLetterMystery('abc'));