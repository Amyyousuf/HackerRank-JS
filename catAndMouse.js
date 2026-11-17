// If cat A catches the mouse first, print Cat A.
// If cat B catches the mouse first, print Cat B.
// If both cats reach the mouse at the same time, print Mouse C as the two cats fight and mouse escapes.

//x, y, z => cat A, cat B, mouse

function catAndMouse(x, y, z){
    const zMinusy = Math.abs(z - y);
    const zMinusx = Math.abs(z - x);

    if(zMinusy < zMinusx){
        return "Cat B";
    } else if (zMinusy > zMinusx){
        return "Cat A";
    }else if (zMinusy === zMinusx){
        return "Mouse C";
    }
}
console.log(catAndMouse(1, 2, 3));
console.log(catAndMouse(1, 3, 2));