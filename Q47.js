
// function alternatingCharacters(s) {
//     let count = 0;
//     for (let i = 1; i < s.length; i++){
//             if (s[i] === s[i - 1]){
//                 count++;
//             }
//     }
//     return count;
// }
function alternatingCharacters(s) {
    let count = 0;
    s.split('').reduce((lead, char) => {
        if (char == lead) {
            count++;
        }
        return char;
    }, 'Z');
    return count;
}
console.log(alternatingCharacters('AAAA'));
console.log(alternatingCharacters('BBBBB'));
console.log(alternatingCharacters('ABABABAB'));
console.log(alternatingCharacters('BABABA'));