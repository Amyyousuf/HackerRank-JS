function staircase(n) {
    // for (let i = 1; i <= n; i++){
    //     let row = ""; //creates an empty row

    //     for (let j = 1; j <= n - i; j++) {
    //         row += " "; //adds spaces to the row i.e. when j=1, j=3-1:2 i.e. 2 spaces
    //     }
    //     for (let k = 1; k <= i; k++){
    //         row += "#"; //adds has to the row
    //     }
    //     console.log(row);
    // }

    for (let i = 1; i <= n; i++){
        let spaces = " ".repeat(n - i);
        let hash = "#".repeat(i);
        console.log(spaces, hash);
    }
}
staircase(3);
