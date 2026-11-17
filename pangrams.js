
function pangrams(s) {
    let letters = new Set(s.toLowerCase().replace(/ /g, ''));

    if (letters.size === 26) {
        return "pangram";
    } else {
        return "not pangram";
    }
}
console.log(pangrams(`We promptly judged antique ivory buckles for the next prize`));