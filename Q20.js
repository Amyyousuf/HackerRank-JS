//n = array.length
//check occurence of number how many times they pair up and return their count
console.log(sockMerchant(5, [10, 20, 10, 10, 20]));

function sockMerchant(n, ar) {
    let count = 0;
    for (let i = 0; i < n; i++){
        for (let j = i+1; j < n; j++){
            if(ar[i] === ar[j]){
                count++;
                ar.splice(j, 1);
                n--;
                break;
            }
        }
    }
    return count;
}