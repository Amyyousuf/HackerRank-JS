
function taumBday(b, w, bc, wc, z) {
    b = BigInt(b);
    w = BigInt(w);
    bc = BigInt(bc);
    wc = BigInt(wc);
    z = BigInt(z);

    if (bc > wc + z) {
        bc = wc + z;
    }
    if (wc > bc + z) {
        wc = bc + z;
    }
    return (b * bc) + (w * wc);
}
console.log(taumBday(10, 10, 1, 1, 1)); 