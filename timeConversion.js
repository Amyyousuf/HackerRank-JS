function timeConversion(s) {
    let hour = s.slice(0, 2);
    let rest = s.slice(2, 8);
    let clock = s.slice(8);

    if (clock === "AM" && hour === "12"){
        hour = '00';
    }
    if (clock === "PM" && Number(hour) !== 12){
        hour = String(Number(hour) + 12);
    }
    
    return hour + rest;
}

console.log(timeConversion('07:05:45PM'));
console.log(timeConversion('12:00:00AM'));
console.log(timeConversion('04:16:25PM'));
console.log(timeConversion('06:40:03AM'));