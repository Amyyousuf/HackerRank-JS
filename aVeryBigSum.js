function aVeryBigSum(ar) {
    // let sum = 0;
    // for (let i = 0; i < ar.length; i++){
    //     sum += ar[i];
    // }
    // return sum;

    // return ar.reduce((accumulator, currentValue) => accumulator + currentValue, 0);

    //BigInt: used to deal with the larger numbers
    // let sum = 0n;
    // for (let i = 0; i < ar.length; i++){
    //     sum += BigInt(ar[i]);
    // }
    // return sum.toString(); //used .toString() or Number() to remove n form the end
    // .toString(): Best way to remove the 'n' at the end, turns it into plain text ("5000000015") so NO digits are ever lost.
    // Number(): Also used to convert back to regular JS number, but the final ans should be under 9,007,199,254,740,991, after it the results might be changed.. 

    return (ar.reduce((accumulator, currentValue) => accumulator + BigInt(currentValue), 0n)).toString();

}
console.log(aVeryBigSum([1000000001, 1000000002, 1000000003, 1000000004, 1000000005]));
