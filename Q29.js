//k --> number of students on time, so class can continue
//number of students arrived on time is less than k true

function angryProfessor(k, a) {
    let onTime = 0;
    for (let i = 0; i < a.length; i++){
        if(a[i] <= 0) //arrived before time or on time, a[i] this minutes early & 0 ontime
            onTime++;
    }
    if(onTime < k)
        return "YES";
    else
        return "NO";
}
console.log(angryProfessor(3, [-1, -3, 4, 2]));
console.log(angryProfessor(2, [0, -1, 2, 1]));