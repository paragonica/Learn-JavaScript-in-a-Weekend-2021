var prices = {
    "shoes": 50.00,
    "hats": 20.00,
    "sunglasses": 10.00
};
function processOrder(order) {
    var total = 0.0;

    for (var item of order) {
        var price = prices[item.name];
        var quantity = item.quantity;

        if (quantity > 10) {
            price *= .8;
        } else if(quantity > 4) {
            price *= .9;
        } else if(quantity > 1) {
            price *= .95;
        }
        total += (price * quantity);
    }
    return total;
}
var myFirstOrder = [{
    name: "sunglasses",
    quantity: 20
}, {
    name: "shoes",
    quantity: 5
}];
var mySecondOrder = [{
    name: "sunglasses",
    quantity: 1
}, {
    name: "shoes",
    quantity: 2
}];
console.log("total order one:", processOrder(myFirstOrder));
console.log("total order two:", processOrder(mySecondOrder));