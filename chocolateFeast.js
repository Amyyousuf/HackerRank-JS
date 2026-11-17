//c --> cost of 1 chocolate 
//n --> total budget/spend
//m --> total number of wrappers to exchange to get 1 free chocolate
//return the total chocolates he eat, bought + free

function chocolateFeast(n, c, m) {
    let chocolateBought = Math.floor(n / c);
    let wrappers = chocolateBought;
    let total = chocolateBought;
    
    while (wrappers >= m) {
        let freeBars = Math.floor(wrappers / m);
        wrappers = (wrappers % m) + freeBars;
        total += freeBars;
    }
    return total;
}
console.log(chocolateFeast(10, 2, 5));
console.log(chocolateFeast(12, 4, 4));
console.log(chocolateFeast(6, 2, 2));
