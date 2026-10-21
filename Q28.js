//initial(0) --> spring(1) --> summer(2) --> spring(3) so on...
//odd = spring and even = summer
//in spring it doubles h + h
//in summers it only adds by 1
//n --> number of cycles/period

function utopianTree(n) {
    let height = 1;
    for (let i = 1; i <= n; i++){
        if (i % 2 != 0) 
            height = height * 2;
        else 
             height ++;
    }
    return height;
}
console.log(utopianTree(4));
