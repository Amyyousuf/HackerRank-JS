
function encryption(s) {
    s = s.replace(/ /g, "");
    let rows = Math.floor(Math.sqrt(s.length));
    let cols = Math.ceil(Math.sqrt(s.length));

    if (rows * cols < s.length) {
        rows++;
    }
    let result = [];
    for (let j = 0; j < cols; j++) {
        let word = "";
        for (let i = j; i < s.length; i += cols) {
            word += s[i];
        }
        result.push(word);
    }
    return result.join(" ");
}
console.log(encryption('chillout'));