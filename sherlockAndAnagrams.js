function sherlockAndAnagrams(s) {
    let count = 0;
    let map = {};

    for (let i = 0; i < s.length; i++) {
        for (let j = i + 1; j <= s.length; j++) {
            let sub = s.slice(i, j);
            let key = sub.split('').sort().join('');

            if (map[key]) {
                count += map[key];
            }
            map[key] = (map[key] || 0) + 1;
        }
    }
    return count;
}
console.log(sherlockAndAnagrams("abba")); 