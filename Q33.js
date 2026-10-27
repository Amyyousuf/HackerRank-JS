//p --> actual price
//d --> discounted unit 
//m --> till what value discount will continue
//s --> budget
//p - d, iteratively until get m value, and total sum of that array until reach s value

function howManyGames(p, d, m, s) {
    let count = 0;
    while ( s >= p){
        s -= p;
        count++;

        if (p - d >= m){
            p -= d;
        } else {
            p = m;
        }
    }
    return count;
}
console.log(howManyGames(20, 3, 6, 70));
