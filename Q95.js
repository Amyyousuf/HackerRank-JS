function jimOrders(orders) {
    let result = orders.map((order, index) => [
        order[0] + order[1],
        index + 1
    ]);
    result.sort((a, b) => a[0] - b[0] || a[1] - b[1]);
    return result.map(order => order[1]);
}
console.log(jimOrders([[8,1],[4,2],[5,6],[3,1],[4,3]]));