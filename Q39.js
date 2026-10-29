//0 --> safe cloud
//1 --> thundercloud --> must be avoided
//can jump 1 or 2 positions forward
//return total number of counts by avoiding jump at value 1

function jumpingOnClouds(c, k) {
    let energy = 100;
    let i = 0;
    do{
        i = (i + k) % c.length;
        energy--; //every jump cost 1 energy

        if ( c[i] === 1){
            energy -= 2; //loses 2 points if jump on thundercloud
        }
    } while (i !== 0);
    return energy;
}
console.log(jumpingOnClouds([0, 0, 1, 0, 0, 1, 1, 0], 2));