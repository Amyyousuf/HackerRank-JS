//round grade:
//if the difference between the grade an next multiple of 5 is less than 3 then round up i.e. 84 --> 85, diff =1, 57 --> 60 no, diff = 3
//if the grade us <38 no roundup
console.log(gradingStudent([4, 73, 67, 38, 35]));

function gradingStudent(grades){
    return grades.map(grades => {
        if (grades < 38){
            return grades;
        } 
        let nextValue = Math.ceil(grades/5) * 5;
            if (nextValue - grades < 3){
                return nextValue;
            }
        return grades;
    });
}