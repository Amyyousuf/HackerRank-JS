//n : total pages --> 5
//p : page need to turn to reach the desired page --> 3
//from the front : turn page 1 to reach page 3
//from the back : turn 2 pages to reach page 3

function pageCount(n, p){
    let front = Math.floor(p / 2); //Math.floor(p / 2) because it gives round value and p/2 gives turns per page...
    let back = Math.floor(n / 2) - Math.floor(p / 2); //Math.floor(n / 2) - math.floor(p / 2) --> from back count
    // for(let i = 1; i < p; i += 2){
    //     front++;
    // }
    // for (let i = n; i > p; i -= 2){
    //     back++;
    // }
    if (front < back){
        return front;
    } else {
        return back;
    }
}
console.log(pageCount(5, 4));