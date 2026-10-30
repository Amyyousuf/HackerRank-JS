//m --> cost
//find what two number sum can be equal to m

function icecreamParlor(m, arr) {
    let sum = 0;
    for (let i = 0; i < arr.length; i++){
        for (let j = i + 1; j < arr.length; j++){
            if (arr[i] + arr[j] === m){
                return [i + 1, j + 1];
            }
        }
    }
}
console.log(icecreamParlor(4, [2, 2, 4, 3]));