// const add = (a, b) => {
//     return a + b;
// }
// console.log(setTimeout(add, 500, 10, 20));

// const add = (a, b) => {
//     return a + b;
// }
// const id = setTimeout(add, 500, 10, 20);
// clearTimeout(id);

// const add = (a, b) => {
//     self.sum = a + b;
// };
// const doMath = () => {
//     let sum = 0;
//     const self = this;

//     setTimeout(add, 500, 10, 20);
//     setTimeout(() => {
//         console.log(self.sum);
//     }, 1000);
// };
// doMath();

// let total = 0;

// const id = setInterval(() => {
//     total += 10;
//     console.log(total);
// }, 300);
// setTimeout(() => {
//     clearInterval(id);
// }, 2000);

var arr = [1, 2, 3, 4, 5];

// for (var x = 0; x < arr.length; x++) {
//     ((cnt) => {
//         setTimeout(() => {
//             console.log(cnt);
//         }, 100);
//     })(x);
// }

for (let x = 0; x < arr.length; x++) {
    setTimeout(() => {
        console.log(x);
    }, 100);
}
