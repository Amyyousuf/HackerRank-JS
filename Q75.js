
function workbook(n, k, arr) {
    let page = 1;
    let count = 0;

    for (let i = 0; i < n; i++) {
        let problems = arr[i];
        for (let j = 1; j <= problems; j++) {
            if (j === page) {
                count++;
            }
            if (j % k === 0 || j === problems) {
                page++;
            }
        }
    }
    return count;
}
console.log(workbook(5, 3, [4, 2, 6, 1, 10]));