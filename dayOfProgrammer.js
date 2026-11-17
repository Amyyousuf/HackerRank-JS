

function dayOfProgrammer(year) {
   if (year === 1918){
    return '26.09.1918';
   }

   if (year < 1918){ //leap year before 1918
        if (year % 4 === 0){
            return `12.09.${year}`;
        } else{
            return `13.09.${year}`;
        }
   } 
//leap year after 1918
   if (year % 400 === 0 || (year % 4 === 0 && year % 100 !== 0)){
        return `12.09.${year}`;
    } else{
        return `13.09.${year}`;
    }

}
console.log(dayOfProgrammer(2000));
console.log(dayOfProgrammer(1918));
console.log(dayOfProgrammer(2400));