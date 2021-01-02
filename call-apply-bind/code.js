// const priceObj = {
//     price: 10.50,
//     getPrice: function() {
//         console.log("this", this);
//         return this.price;
//     }
// };
// console.log(priceObj.getPrice());

// const getPriceFunc = priceObj.getPrice;
// console.log(getPriceFunc());

// const getPriceFunc = priceObj.getPrice;
// let price = getPriceFunc.call(priceObj);
// console.log(price);

// price = getPriceFunc.apply(priceObj);
// console.log(price);

// const coords = {
//     x: 10,
//     y: 20,
//     plot: function(a, b) {
//         return [this.x + a, this.y + b];
//     }
// };
// console.log(coords.plot(5, 2));
// const coordsFunction = coords.plot;
// console.log(coordsFunction.call(coords, 15, 35));
// console.log(coordsFunction.apply(coords, [15, 35]));

const mathOperation = {
    a: 1,
    b: 2,
    add: function() {
        let result = 0;

        for (let x of arguments) {
            result += x;
        }
        return this.a + this.b + result;
    }
};
console.log(mathOperation.add(5, 6));
const addFunc = mathOperation.add.bind(mathOperation, 100);
console.log(addFunc());
console.log(addFunc(1000, 2000));