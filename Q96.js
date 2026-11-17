function flippingBits(n) {
    return (n ^ 0xFFFFFFFF) >>> 0;
}

console.log(flippingBits(2147483647));
console.log(flippingBits(1));
console.log(flippingBits(0));