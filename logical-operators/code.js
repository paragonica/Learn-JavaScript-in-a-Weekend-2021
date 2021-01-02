// console.log(true && true);
// console.log(true && false);
// console.log(false && true);
// console.log(true && 1);
// console.log(5 && false);
// console.log("apple" && "orange");
// console.log(false && "car");
// console.log(true && true && true && true);
// console.log(true && true && false && true);
// var price = 100.00;
// var quantity = 5;
// console.log(price == 100 && quantity >= 5);
// console.log(price >= 200 && quantity <= 5);

// console.log(true || true);
// console.log(false || true);
// console.log(true || false);
// console.log(false || (3 == 4));
// console.log("cat" || "dog");
// console.log(false || "cat");
// console.log("" || false);
// console.log(true || true && true);
// console.log(false || true && 0);

// console.log(!true);
// console.log(!false);
// console.log(!1);
// console.log(!0);
// console.log(!"");
// console.log(!"cat");

function getPrice(weekend, price) {
    if (!weekend) {
        return price * .85;
    }
    return price;
}
console.log(getPrice(true, 100.00));
console.log(getPrice(false, 100.00));