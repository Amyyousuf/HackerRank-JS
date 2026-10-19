let birthDay = 4; //sum that should be equal to this
let birthMonth = 1; //length of array(square)
let square = [4, 1];

function birthday(square, birthDay, birthMonth){
    let count = 0;
    for (let i = 0; i <= square.length - birthMonth; i++){
        let sum = 0;
        for(let j = i; j < i + birthMonth; j++){
            sum += square[j];
        }
        if(sum === birthDay)
            count++;
    }
    return count;
}
console.log(birthday(square, birthDay, birthMonth));
