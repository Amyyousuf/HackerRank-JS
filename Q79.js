
function hackerrankInString(s) {
    let word = "hackerrank";
    let j = 0;

    for (let i = 0; i < s.length; i++) {
        if (s[i] === word[j]) {
            j++;
        }
        if (j === word.length) {
            return "YES";
        }
    }
    return "NO";
}
console.log(hackerrankInString(hereiamstackerrank));