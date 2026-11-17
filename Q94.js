function makingAnagrams(s1, s2) {
    let freq = Array(26).fill(0);

    for (let char of s1) {
        freq[char.charCodeAt(0) - 97]++;
    }
    for (let char of s2) {
        freq[char.charCodeAt(0) - 97]--;
    }
    return freq.reduce((sum, count) => sum + Math.abs(count), 0);
}

console.log(makingAnagrams("cde", "abc"));