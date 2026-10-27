//h --> hour
//m --> minutes

function timeInWords(h, m) {
    let number = ["zero", "one", "two", "three", "four", "five", "six", "seven", "eight", "nine", "ten", "eleven", "twelve", "thirteen", "fourteen", "fifteen", "sixteen", "seventeen", "eighteen", "nineteen", "twenty", "twenty one", "twenty two", "twenty three", "twenty four", "twenty five", "twenty six", "twenty seven", "twenty eight", "twenty nine"]
    
    if(m == 0){
        return number[h] + " o' clock";
    }
    if(m == 15){
        return "quarter past " + number[h];
    }
    if(m == 30){
        return "half past " + number[h];
    }
    if(m == 45){
        return "quarter to " + number[h + 1];
    }
    if(m < 30){
        return number[m] + (m == 1 ? " minute past " : " minutes past ") + number[h];
    }
    (m = 60 - m)
        return number[m] + (m == 1 ? " minute to " : " minutes to ") + number[h + 1];
}
console.log(timeInWords(5, 22));

