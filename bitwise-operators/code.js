var fruits = ["apple", "orange", "cherry"];
console.log(fruits[0]);
console.log(fruits[1]);
console.log(fruits[2]);
console.log(fruits.indexOf("pear"));
console.log(fruits.indexOf("cherry"));

function foundItem(idx) {
    return Boolean(~idx);
}
console.log(foundItem(fruits.indexOf("cherry")));
console.log(foundItem(fruits.indexOf("pear")));