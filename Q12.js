function kangroo(x1, v1, x2, v2){
    if (v1 === v2) return (x1 === x2) ? "Yes" : "No";

    if ((x2 - x1) % (v1 - v2) === 0 && (x2 - x1) / (v1 - v2) >= 0){
        return "Yes";
    }
    return "No";
}

console.log(kangroo(0, 3, 4, 2));