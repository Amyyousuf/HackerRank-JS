function viralAdvertising(n) {
    let shared = 5;
    let totalLikes = 0;

    for (let day = 1; day <= n; day++){
        let liked = Math.floor(shared / 2);
        totalLikes += liked;
        shared = liked * 3;
    }
    return totalLikes;
}
console.log(viralAdvertising(3));
