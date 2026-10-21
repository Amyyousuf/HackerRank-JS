//h --> array of 26 letters 0-25, a number assigned to each letter
//word --> given from which we have to return, value of highest letter multiplied by total length of words

function designerPdfViewer(h, word) {
    let maximum = 0;
    for (let letter of word){
        let index = letter.charCodeAt(0) - 97; //a,b,c.... starts form 97 in ASCII
        let height = h[index];
        if (height > maximum){
            maximum = height;
        }
    }
    let area = maximum * word.length;
    return area;
}
console.log(designerPdfViewer([1, 3, 1, 3, 1, 4, 1, 3, 2, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5], 'abc'));