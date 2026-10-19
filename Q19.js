//bill --> array of items price
//k item that Anna didn't eat 
//b ammount anna contributed or paid
//return Bon Appetit if the bills splits fair if not return the money brian should return to anna
// let bill = [3, 10, 2, 9];
// let k = bill[2];
// let b = 12;

bonAppetit([3, 10, 2, 9], [10], 12);

function bonAppetit(bill, k, b) {
  const output = [];
    for (let element of bill)
        if (!k.includes(element))
            output.push(element);
        const result = output.reduce(
            (accumulator, currentValue) => accumulator + currentValue, 0
        ); //anna's bill sum, i.e. bill sum excluded k
    let annaSplit = result / 2; //half of bill excluded by anna

//in this method you have to write value of k in form of index i.e. 0, 1, 2...

    //     const result = bill.reduce(                                     
    //         (accumulator, currentValue, index) => {
    //             if (index !== k){
    //             return accumulator + currentValue
    //             }
    //             return accumulator;
    //         }, 0 ); //anna's bill sum, i.e. bill sum excluded k
    // let annaSplit = result / 2; //half of bill excluded by anna

    if (b === annaSplit){
        console.log('Bon Appetit');
    }else {
        console.log("Amount to return:", b - annaSplit);
    }
}


