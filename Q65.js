function maximizingXor(l, r) {
    let maxXor = 0;
    let result = [];
    for (let i = l; i <= r; i++){
        result.push(i);
    }
    for (let i = 0; i < result.length; i++){
        for (let j = 0; j < result.length; j++){
            maxXor = Math.max(maxXor, result[i] ^ result[j]);
        }
    }
    return maxXor;
}
console.log(maximizingXor(10, 15));
console.log(maximizingXor(11, 12));
console.log(maximizingXor(11, 100));