function stringConstruction(s) {
    let count = 0;
    for (let i = 0; i < s.length; i++){
        if (s.indexOf(s[i]) == i){
            count++;
        }
    }
    return count;
}
console.log(stringConstruction("abab"));