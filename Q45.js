//Q39 part 2
//jump should be 1 or 2
//avoid cloud having value 1
//return minimum numbers of jump

function jumpingOnClouds(c){
    let jump = 0;
    let i = 0;
    while(i < c.length - 1){
        if (c[i + 2] === 0){
            i += 2;
        }else{
            i += 1;
        }
        jump++;
    }
    return jump;
}
console.log(jumpingOnClouds([0, 1, 0, 0, 0, 1, 0]));