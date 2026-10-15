function timeConversion(time){
    let hour = time.slice(0,2);
    let rest = time.slice(2,8);
    let period = time.slice(8);

    if(period === "PM" && Number(hour) !== 12){
        hour = String(Number(hour) + 12);
    }
    if (period === "AM" && hour === "12"){
        hour = "00";
    }
    return hour + rest;
}
console.log(timeConversion("07:05:45PM"));
console.log(timeConversion("12:05:45AM"));