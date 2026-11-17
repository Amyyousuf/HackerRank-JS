
function happyLadybugs(b) {
    let freq = {};

    for (let char of b) {
        if (char !== "_") {
            freq[char] = (freq[char] || 0) + 1;
        }
    }
    for (let color in freq) { 
        if (freq[color] === 1) {
            return "NO";
        }
    }
    if (b.includes("_")) { // If there is an empty cell, ladybugs can be rearranged
        return "YES";
    }
    for (let i = 0; i < b.length; i++) { 
        let left = b[i - 1];
        let right = b[i + 1];
        if (b[i] !== left && b[i] !== right) {
            return "NO";
        }
    }
    return "YES";
}
console.log(happyLadybugs("RBY_YBR"));