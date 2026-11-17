
function kaprekarNumbers(p, q) {
    let result = [];

    for (let n = p; n <= q; n++) {
        let square = String(n * n);
        let d = String(n).length;
        let left = square.slice(0, square.length - d);
        let right = square.slice(square.length - d);
        let leftNum = Number(left) || 0;
        let rightNum = Number(right);

        if (leftNum + rightNum === n) {
            result.push(n);
        }
    }
    if (result.length === 0) {
        console.log("INVALID RANGE");
    } else {
        console.log(result.join(" "));
    }
}
kaprekarNumbers(1, 100); 
