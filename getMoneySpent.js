//b --> budget

function getMoneySpent(keyboards, drives, b){
    let payMax = -1; //start at -1, because we havn't found the valid combination yet
    // if(keyboards.length != drives.length){
    //     return -1;
    // }

    for (let keyboardItem of keyboards){
        for (let driveItem of drives){
            let total = keyboardItem + driveItem;
            if (total <= b && total > payMax){
                payMax = total;
            }
            // else if (payMax > b){
            //     return -1;
            // }
        }
    }
    return payMax;
}

// console.log(getMoneySpent([40, 50, 60], [5, 8, 12], 60));
//console.log(getMoneySpent([5, 1, 1], 4, 5));
/*
sample input: 10 2 3  //means 10 budget, 2 keyboard values, 3 drives values
               3 1
               5 2 8
*/
console.log(getMoneySpent([3, 1], [5, 2, 8], 10));
