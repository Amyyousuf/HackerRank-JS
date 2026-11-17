
function acmTeam(topic) {
    let max = 0;
    let count = 0;

    for (let i = 0; i < topic.length; i++) {
        for (let j = i + 1; j < topic.length; j++) {
            let topics = 0;
            for (let k = 0; k < topic[i].length; k++) {
                if (topic[i][k] === '1' || topic[j][k] === '1') {
                    topics++;
                }
            }
            if (topics > max) {
                max = topics;
                count = 1;
            } 
            else if (topics === max) {
                count++;
            }
        }
    }
    return [max, count];
}
console.log(acmTeam(["10101", "11100"]));