// function marsExploration(s) {
//     let count = 0;
//     for (let value of s){
//         if (value != "S" && value != "O"){
//             count++;
//         }
//     }
//     return count;
// }

function marsExploration(s) {
    let count = 0;

    for (let i = 0; i < s.length; i++) {
        if (s[i] !== "SOS"[i % 3]) {
            count++;
        }
    }

    return count;
}

console.log(marsExploration(['S', 'O', 'S', 'S', 'P', 'S', 'S', 'Q', 'S', 'S', 'O', 'R']));
