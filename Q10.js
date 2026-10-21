function timeConversion(time){ 
    let hour = time.slice(0,2); //slice returns value in string i.e "07"
    let rest = time.slice(2,8);
    let period = time.slice(8); 

    if(period === "PM" && Number(hour) !== 12){ //Number(hour) converts string to number so that it can compare in numeric values
        hour = String(Number(hour) + 12); //converts back in string after performing addition
    }
    if (period === "AM" && hour === "12"){ //"12" to compare with houe i.e. "07"
        hour = "00";
    }
    return hour + rest;
}
console.log(timeConversion("07:05:45PM"));
console.log(timeConversion("12:05:45AM"));