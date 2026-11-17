
function balancedSums(arr) {
    let total = arr.reduce((sum, num) => sum + num, 0);
    let leftSum = 0;

    for (let i = 0; i < arr.length; i++) {
        let rightSum = total - leftSum - arr[i];
        if (leftSum === rightSum) {
            return "YES";
        }
        leftSum += arr[i];
    }
    return "NO";
}
console.log(balancedSums([1,2,3]));
console.log(balancedSums([1,2,3,3]));     
