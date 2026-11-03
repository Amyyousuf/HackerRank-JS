//i % s.length --> help us repeat the string like abc ---> abcabc...

// function repeatedString(s, n) {
//     let string = "";
//     let count = 0;

//     for (let i = 0; i < n; i++) {
//         string += s[i % s.length]
//     }
//     for (let element of string){
//         if (element === 'a'){
//             count++;
//         }
//     }
//     return count;
// }

function repeatedString(s, n) {
    let count = 0;
    
    for (let i = 0; i < s.length; i++){
        if(s[i] === 'a')
            count++;
    }

    let fullString = Math.floor(n / s.length);
    let remaining = n % s.length;
    let extra = 0;

    for (let i = 0; i < remaining; i++){
        if (s[i] === 'a')
            extra++;
    }

    return count * fullString + extra;
}
console.log(repeatedString('a', 1000000000000));
